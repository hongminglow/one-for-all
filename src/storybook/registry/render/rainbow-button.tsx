import type { ComponentProps } from "react";
import React from "react";
import * as Shared from "../shared-demos";
import { ArrowRight } from "lucide-react";
import { RainbowButton } from "@/components/jolyui/RainbowButton";

type RenderProps = Partial<Omit<ComponentProps<typeof RainbowButton>, "children">> & {
	text?: string;
};

export default function Render(props: RenderProps) {
	const { duration = 2, borderWidth = 2, animated = true, text = "Rainbow Button", ...rest } = props;

	return (
		<div className="flex items-center justify-center p-8">
			<RainbowButton className="group">
				Get Started
				<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
			</RainbowButton>
		</div>
	);
}
