import type { ComponentProps } from "react";
import React from "react";
import * as Shared from "../shared-demos";
import ShinyText from "@/components/reactbits/ShinyText";

type RenderProps = Partial<ComponentProps<typeof ShinyText>>;

export default function Render(props: RenderProps) {
	const {
		text = "✨ Shiny Text Effect",
		speed = 2,
		delay = 0,
		color = "var(--sb-text-muted)",
		shineColor = "var(--sb-text-strong)",
		spread = 120,
		direction = "left",
		yoyo = false,
		pauseOnHover = false,
		disabled = false,
		...rest
	} = props;

	return (
		<div className="text-[28px] font-black tracking-tight" style={{ width: "100%" }}>
			<ShinyText
				text={text}
				speed={speed}
				delay={delay}
				color={color}
				shineColor={shineColor}
				spread={spread}
				direction={direction}
				yoyo={yoyo}
				pauseOnHover={pauseOnHover}
				disabled={disabled}
				{...rest}
			/>
		</div>
	);
}
