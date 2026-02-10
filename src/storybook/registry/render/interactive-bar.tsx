import React from "react";
import * as Shared from "../shared-demos";
import BarInteractive from "@/components/shadcn/BarInteractive";

type RenderProps = Record<string, unknown>;

export default function Render(props: RenderProps) {
	return (
		<div className="w-full max-w-[600px] p-4 justify-self-center">
			<BarInteractive />
		</div>
	);
}
