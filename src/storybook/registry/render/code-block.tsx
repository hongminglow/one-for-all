import React from "react";
import * as Shared from "../shared-demos";
import CodeBlock from "@/components/shadcn/CodeBlock";

type RenderProps = Record<string, unknown>;

export default function Render(props: RenderProps) {
	return (
		<div className="w-full max-w-[620px] justify-self-center">
			<CodeBlock
				code={`const greeting = "Hello World";
console.log(greeting);
`}
				language="javascript"
			/>
		</div>
	);
}
