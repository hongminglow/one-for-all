import type { ComponentProps } from "react";
import React from "react";
import * as Shared from "../shared-demos";
import DecryptedText from "@/components/reactbits/DecryptedText";

type RenderProps = Partial<ComponentProps<typeof DecryptedText>>;

export default function Render(props: RenderProps) {
	const {
		text = "Hover to decrypt!",
		speed = 50,
		maxIterations = 10,
		sequential = false,
		revealDirection = "start",
		animateOn = "hover",
		...rest
	} = props;

	return (
		<div
			className="w-full min-h-[200px] rounded-2xl border border-[var(--sb-border-2)] bg-(--sb-panel) p-8 flex items-center justify-center"
			style={{ minHeight: 200 }}
		>
			<div className="text-[28px] font-black text-(--sb-text-strong)">
				<DecryptedText
					text={text}
					speed={speed}
					maxIterations={maxIterations}
					sequential={sequential}
					revealDirection={revealDirection}
					animateOn={animateOn}
					{...rest}
				/>
			</div>
		</div>
	);
}
