import type { ComponentProps } from "react";
import React from "react";
import * as Shared from "../shared-demos";
import RainbowButton from "@/components/jolyui/RainbowButton";

type RenderProps = Partial<Omit<ComponentProps<typeof RainbowButton>, "children">> & {
	text?: string;
};

export default function Render(props: RenderProps) {
	const { duration = 2, borderWidth = 2, animated = true, text = "Rainbow Button", ...rest } = props;

	return (
		<div className="flex items-center justify-center" style={{ height: 160 }}>
			<RainbowButton duration={duration} borderWidth={borderWidth} animated={animated} {...rest}>
				{text}
			</RainbowButton>
		</div>
	);
}
