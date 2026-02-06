"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

import { COMPONENTS } from "@/storybook/components";
import { STORYBOOK } from "@/storybook/storybook-constants";
import { applyTheme, getInitialTheme, type ThemeMode } from "@/storybook/theme";
import { SearchModal } from "@/storybook/search/SearchModal";

function MoonIcon(props: { className?: string }) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
			className={props.className}
		>
			<path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79Z" />
		</svg>
	);
}

export function StorybookShell(props: { children: React.ReactNode }) {
	const [isSearchOpen, setIsSearchOpen] = useState(false);
	const [theme, setTheme] = useState<ThemeMode>(() => getInitialTheme());
	const pathname = usePathname();

	useEffect(() => {
		applyTheme(theme);
	}, [theme]);

	useEffect(() => {
		const onKeyDown = (e: KeyboardEvent) => {
			if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
				e.preventDefault();
				setIsSearchOpen(true);
			}
			if (e.key === "Escape") setIsSearchOpen(false);
		};
		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, []);

	const selected = useMemo(() => {
		const match = pathname?.match(/^\/components\/([^/]+)$/);
		const slug = match?.[1];
		if (!slug) return COMPONENTS[0];
		return COMPONENTS.find((c) => c.slug === slug) ?? COMPONENTS[0];
	}, [pathname]);

	const groupedSidebarItems = useMemo(() => {
		const groups = STORYBOOK.navigation.groups;
		type Item = (typeof COMPONENTS)[number];
		const buckets = new Map<string, Item[]>();
		for (const g of groups) buckets.set(g.id, [] as Item[]);

		for (const item of COMPONENTS) {
			const haystack = `${item.slug} ${item.title} ${item.description} ${item.url}`.toLowerCase();

			let best: { id: string; score: number } | null = null;
			for (const g of groups) {
				if (g.id === "other") continue;
				let score = 0;
				for (const kw of g.keywords) if (haystack.includes(kw)) score += 1;
				if (score > 0 && (!best || score > best.score)) best = { id: g.id, score };
			}

			const key = best?.id ?? "other";
			buckets.get(key)?.push(item);
		}

		return groups
			.map((g) => ({
				id: g.id,
				label: g.label,
				items: buckets.get(g.id) ?? [],
			}))
			.filter((g) => g.items.length > 0);
	}, []);

	const selectedGroupLabel = useMemo(() => {
		for (const group of groupedSidebarItems) {
			if (group.items.some((x) => x.slug === selected?.slug)) return group.label;
		}
		return groupedSidebarItems[0]?.label ?? "Sections";
	}, [groupedSidebarItems, selected?.slug]);

	return (
		<div className="flex h-dvh flex-col overflow-hidden bg-[var(--sb-bg)] text-[var(--sb-text)]">
			{/* Topbar: fixed height, never scrolls */}
			<header className="h-[72px] flex-shrink-0 border-b border-[var(--sb-border)] bg-[var(--sb-topbar)]">
				<div className="mx-auto flex h-full w-full max-w-[1440px] items-center">
					<div className="flex flex-1 items-center gap-3">
						<Image src="/logo.svg" alt="" width={36} height={36} className="flex-shrink-0" priority />
						<div>
							<div className="text-[18px] font-extrabold tracking-tight text-[var(--sb-text-strong)]">
								{STORYBOOK.brand.title}
							</div>
							<div className="-mt-0.5 flex items-center gap-3 text-[12px] font-medium text-[var(--sb-text-muted)]">
								<span>{STORYBOOK.brand.subtitle}</span>
								<span className="inline-flex items-center rounded-full border border-[var(--sb-border)] bg-[var(--sb-panel)] px-2 py-0.5 text-[11px] font-black text-[var(--sb-text-strong)]">
									{COMPONENTS.length} components
								</span>
							</div>
						</div>
					</div>

					<button
						type="button"
						onClick={() => setIsSearchOpen(true)}
						className="mx-8 flex h-10 w-[520px] items-center gap-3 rounded-[10px] border border-[var(--sb-border-2)] bg-[var(--sb-input)] px-3 text-left text-[13px] font-medium text-[var(--sb-text-muted)]"
						aria-label="Open search"
					>
						<span className="inline-flex h-[14px] w-[14px] rounded-full bg-[var(--sb-icon)]" />
						<span className="flex-1">{STORYBOOK.search.placeholder}</span>
						<span className="rounded-md border border-[var(--sb-border-2)] bg-[var(--sb-card)] px-2 py-1 text-[11px] font-semibold text-[var(--sb-text-strong)]">
							{STORYBOOK.search.shortcutLabel}
						</span>
					</button>

					<button
						type="button"
						onClick={() => {
							const next: ThemeMode = theme === "dark" ? "light" : "dark";
							setTheme(next);
							applyTheme(next);
						}}
						className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--sb-border-2)] bg-[var(--sb-card)] text-[var(--sb-text-strong)]"
						aria-label="Toggle theme"
						title="Toggle theme"
					>
						<MoonIcon className="h-[18px] w-[18px]" />
					</button>
				</div>
			</header>

			{/* Single row: sticky sidebar + main content. Only main scrolls. */}
			<div className="flex min-h-0 flex-1">
				{/* Left sidebar: sticky, independent of main scroll, fixed width */}
				<aside className="sticky top-0 z-10 h-[calc(100dvh-72px)] w-[288px] flex-shrink-0 border-r border-[var(--sb-border)] bg-[var(--sb-sidebar)]">
					<div className="flex h-full flex-col px-5 pt-6">
						<div className="text-[12px] font-extrabold tracking-wide text-[var(--sb-text-muted)]">
							{selectedGroupLabel}
						</div>
						<nav className="sb-scroll mt-4 min-h-0 flex-1 space-y-5 overflow-y-auto pr-2">
							{groupedSidebarItems.map((group) => (
								<div key={group.id}>
									<div className="mb-2 text-[11px] font-black tracking-wide text-[var(--sb-text-dim)]">
										{group.label}
									</div>
									<div className="space-y-1">
										{group.items.map((item) => {
											const isSelected = item.slug === selected?.slug;
											return (
												<Link
													key={item.id}
													href={`/components/${item.slug}`}
													className={
														isSelected
															? "relative flex items-center rounded-[10px] border border-[var(--sb-border-2)] bg-[var(--sb-selected)] px-3 py-2 text-[13px] font-bold text-[var(--sb-text-strong)]"
															: "flex items-center rounded-[10px] px-3 py-2 text-[13px] font-semibold text-[var(--sb-text-strong)] opacity-90 hover:bg-[var(--sb-hover)]"
													}
												>
													{isSelected ? (
														<span className="absolute left-0 top-0 h-full w-1 rounded-l-[10px] bg-[var(--sb-accent)]" />
													) : null}
													<span className={isSelected ? "pl-2" : undefined}>{item.title}</span>
												</Link>
											);
										})}
									</div>
								</div>
							))}
						</nav>
					</div>
				</aside>

				{/* Main content: only this area scrolls; no sidebar inside */}
				<main className="min-w-0 flex-1 bg-[var(--sb-bg)]">
					<div className="sb-scroll h-full overflow-y-auto px-8 py-8">{props.children}</div>
				</main>
			</div>

			{isSearchOpen ? <SearchModal open={true} onOpenChange={setIsSearchOpen} /> : null}
		</div>
	);
}
