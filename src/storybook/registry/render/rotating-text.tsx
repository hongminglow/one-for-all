import type { ComponentProps } from "react";
import React from "react";
import * as Shared from "../shared-demos";
import RotatingText from "@/components/reactbits/RotatingText";

type RenderProps = Partial<ComponentProps<typeof RotatingText>>;

export default function Render(props: RenderProps) {
	const {
		texts = ["React", "Bits", "Design", "Code"],
		rotationInterval = 2000,
		staggerDuration = 0.025,
		mainClassName,
		...rest
	} = props;

	const mergedMainClassName = ["px-2 bg-cyan-300 text-black overflow-hidden py-1 rounded-lg", mainClassName]
		.filter(Boolean)
		.join(" ");

	return (
		<div
			className="w-full min-h-[200px] rounded-2xl border border-[var(--sb-border-2)] bg-(--sb-panel) p-8 flex items-center justify-center"
			style={{ minHeight: 200 }}
		>
			<div className="text-[28px] font-black text-(--sb-text-strong) flex items-center gap-2">
				<span>I love</span>
				<RotatingText
					texts={texts}
					rotationInterval={rotationInterval}
					staggerDuration={staggerDuration}
					mainClassName={mergedMainClassName}
					{...rest}
				/>
			</div>
		</div>
	);
}
