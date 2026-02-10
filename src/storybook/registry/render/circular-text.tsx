import type { ComponentProps } from "react";
import React from "react";
import * as Shared from "../shared-demos";
import CircularText from "@/components/reactbits/CircularText";

type RenderProps = ComponentProps<typeof CircularText>;

export default function Render(props: RenderProps) {
	const { text, onHover, spinDuration, className, ...rest } = props;

	return (
		<CircularText
			{...rest}
			text={text ?? "REACT*BITS*COMPONENTS*"}
			onHover={onHover ?? "speedUp"}
			spinDuration={spinDuration ?? 20}
			className={className ?? "custom-class text-(--sb-text-strong)"}
		/>
	);
}
