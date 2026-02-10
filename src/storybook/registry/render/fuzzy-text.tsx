import type { ComponentProps } from "react";
import React from "react";
import * as Shared from "../shared-demos";
import FuzzyText from "@/components/reactbits/FuzzyText";

type RenderProps = ComponentProps<typeof FuzzyText>;

export default function Render(props: RenderProps) {
	return (
		<FuzzyText
			baseIntensity={0.18}
			hoverIntensity={0.5}
			enableHover={true}
			className="text-[40px] justify-self-center font-black text-(--sb-text-strong)"
			{...props}
		>
			Fuzzy Text
		</FuzzyText>
	);
}
