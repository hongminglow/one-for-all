import React from "react";
import * as Shared from "../shared-demos";
import CodeTabs from "@/components/shadcn/CodeTabs";

type RenderProps = Record<string, unknown>;

export default function Render(props: RenderProps) {
	return (
		<div className="w-full max-w-[620px] justify-self-center">
			<CodeTabs
				tabs={[
					{
						title: "npm",
						code: "npm install one-for-all",
						language: "bash",
					},
					{
						title: "yarn",
						code: "yarn add one-for-all",
						language: "bash",
					},
					{
						title: "pnpm",
						code: "pnpm add one-for-all",
						language: "bash",
					},
				]}
			/>
		</div>
	);
}
