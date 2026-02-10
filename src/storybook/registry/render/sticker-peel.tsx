import type { ComponentProps } from "react";
import React from "react";
import * as Shared from "../shared-demos";
import StickerPeel from "@/components/reactbits/StickerPeel";

type RenderProps = Partial<ComponentProps<typeof StickerPeel>>;

export default function Render(props: RenderProps) {
	const {
		imageSrc = "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=500&auto=format&fit=crop&q=60",
		width = 300,
		rotate = 15,
		peelBackHoverPct = 30,
		peelBackActivePct = 40,
		peelDirection = 0,
		shadowIntensity = 0.6,
		lightingIntensity = 0.1,
		...rest
	} = props;

	return (
		<div className="w-full flex items-center justify-center overflow-hidden bg-black min-h-[400px] rounded-xl border border-(--sb-border) relative">
			<StickerPeel
				imageSrc={imageSrc}
				width={width}
				rotate={rotate}
				peelBackHoverPct={peelBackHoverPct}
				peelBackActivePct={peelBackActivePct}
				peelDirection={peelDirection}
				shadowIntensity={shadowIntensity}
				lightingIntensity={lightingIntensity}
				{...rest}
			/>
		</div>
	);
}
