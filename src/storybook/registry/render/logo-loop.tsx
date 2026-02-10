import type { ComponentProps } from "react";
import React from "react";
import * as Shared from "../shared-demos";
import LogoLoop from "@/components/reactbits/LogoLoop";

type RenderProps = Partial<ComponentProps<typeof LogoLoop>>;

const techLogos = [
	{ src: "/logo.svg", alt: "One for all" },
	{ src: "/logo.svg", alt: "Components" },
	{ src: "/logo.svg", alt: "Storybook" },
	{ src: "/logo.svg", alt: "React" },
	{ src: "/logo.svg", alt: "Next.js" },
	{ src: "/logo.svg", alt: "Tailwind" },
];

export default function Render(props: RenderProps) {
	const {
		logos = techLogos,
		speed = 100,
		direction = "left",
		logoHeight = 40,
		gap = 40,
		hoverSpeed = 0,
		scaleOnHover = true,
		fadeOut = true,
		...rest
	} = props;

	return (
		<div className="flex items-center justify-center w-full min-h-[160px] p-4 bg-(--sb-bg) rounded-2xl border border-(--sb-border)">
			<LogoLoop
				logos={logos}
				speed={speed}
				direction={direction}
				logoHeight={logoHeight}
				gap={gap}
				hoverSpeed={hoverSpeed}
				scaleOnHover={scaleOnHover}
				fadeOut={fadeOut}
				{...rest}
			/>
		</div>
	);
}
