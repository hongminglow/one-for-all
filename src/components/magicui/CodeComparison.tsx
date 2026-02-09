"use client";

import { useEffect, useMemo, useState } from "react";
import { FileIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { codeToHtml } from "shiki";

import { cn } from "@/lib/utils";

interface CodeComparisonProps {
	beforeCode: string;
	afterCode: string;
	language: string;
	filename: string;
	lightTheme: string;
	darkTheme: string;
	highlightColor?: string;
}

export function CodeComparison({
	beforeCode,
	afterCode,
	language,
	filename,
	lightTheme,
	darkTheme,
	highlightColor = "rgba(101, 117, 133, 0.16)",
}: CodeComparisonProps) {
	const { theme, systemTheme } = useTheme();
	const [highlightedBefore, setHighlightedBefore] = useState("");
	const [highlightedAfter, setHighlightedAfter] = useState("");

	const selectedTheme = useMemo(() => {
		const currentTheme = theme === "system" ? systemTheme : theme;
		return currentTheme === "dark" ? darkTheme : lightTheme;
	}, [theme, systemTheme, darkTheme, lightTheme]);

	useEffect(() => {
		async function highlightCode() {
			if (!selectedTheme) return;

			try {
				const { transformerNotationHighlight, transformerNotationDiff, transformerNotationFocus } =
					await import("@shikijs/transformers");

				const before = await codeToHtml(beforeCode, {
					lang: language,
					theme: selectedTheme,
					transformers: [transformerNotationHighlight(), transformerNotationDiff(), transformerNotationFocus()],
				});

				const after = await codeToHtml(afterCode, {
					lang: language,
					theme: selectedTheme,
					transformers: [transformerNotationHighlight(), transformerNotationDiff(), transformerNotationFocus()],
				});

				setHighlightedBefore(before);
				setHighlightedAfter(after);
			} catch (error) {
				console.error("Error highlighting code:", error);
				setHighlightedBefore(`<pre>${beforeCode}</pre>`);
				setHighlightedAfter(`<pre>${afterCode}</pre>`);
			}
		}

		highlightCode();
	}, [beforeCode, afterCode, language, selectedTheme]);

	const renderCode = (code: string, highlighted: string) => {
		if (highlighted) {
			return (
				<div
					className={cn(
						"h-full w-full overflow-auto bg-background font-mono text-xs",
						"[&>pre]:h-full [&>pre]:!bg-transparent [&>pre]:p-4 [&>pre]:font-mono [&>pre]:text-sm",
						"[&>pre]:!w-full [&>pre]:!min-w-full", // Ensure full width
						"scrollbar-hide", // Hide scrollbar if desired, or keep standard
					)}
					dangerouslySetInnerHTML={{ __html: highlighted }}
				/>
			);
		} else {
			return (
				<pre className="h-full overflow-auto bg-background p-4 font-mono text-xs break-all text-foreground">{code}</pre>
			);
		}
	};

	return (
		<div className="mx-auto w-full max-w-5xl">
			<div className="group relative w-full overflow-hidden rounded-xl border border-border bg-background">
				<div className="grid md:grid-cols-2">
					{/* Before Code Section */}
					<div className="border-r border-border">
						<div className="flex items-center border-b border-border bg-muted/50 px-4 py-2 text-sm font-medium text-foreground">
							<FileIcon className="mr-2 h-4 w-4 text-muted-foreground" />
							{filename}
							<span className="ml-auto text-xs text-muted-foreground">before</span>
						</div>
						<div className="h-[400px] overflow-auto">{renderCode(beforeCode, highlightedBefore)}</div>
					</div>

					{/* After Code Section */}
					<div className="group/right relative">
						<div className="flex items-center border-b border-border bg-muted/50 px-4 py-2 text-sm font-medium text-foreground">
							<FileIcon className="mr-2 h-4 w-4 text-muted-foreground" />
							{filename}
							<span className="ml-auto text-xs text-muted-foreground">after</span>
						</div>

						{/* Blur Effect Container */}
						<div
							className={cn(
								"h-[400px] overflow-auto transition-all duration-300",
								// Apply blur by default to code content, remove on hover
								"[&_pre]:blur-sm group-hover/right:[&_pre]:blur-none transition-[filter]",
							)}
						>
							{renderCode(afterCode, highlightedAfter)}
						</div>
					</div>
				</div>

				<div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg border border-border bg-muted px-2 py-1 text-xs font-medium text-foreground shadow-sm md:flex z-10">
					VS
				</div>
			</div>
		</div>
	);
}
