import type { ComponentProps } from "react";
import React from "react";
import * as Shared from "../shared-demos";
import GooeyTextMorphing from "@/components/jolyui/GooeyTextMorphing";

type RenderProps = Partial<Omit<ComponentProps<typeof GooeyTextMorphing>, "texts" | "morphTime" | "cooldownTime">> & {
	duration?: number;
	pauseDuration?: number;
	texts?: string[];
};

export default function Render(props: RenderProps) {
	const {
		duration = 1.2,
		pauseDuration = 1.2,
		texts = ["Joly UI", "One-for-all", "Storybook"],
		className,
		...rest
	} = props;

	const mergedClassName = ["text-foreground", className].filter(Boolean).join(" ");

	return (
		<div className="flex items-center justify-center" style={{ height: 200 }}>
			<GooeyTextMorphing
				texts={texts}
				morphTime={duration}
				cooldownTime={pauseDuration}
				className={mergedClassName}
				{...rest}
			/>
		</div>
	);
}
