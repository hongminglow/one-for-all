import React from "react";
import * as Shared from "../shared-demos";
import { CodeComparison } from "@/components/ui/code-comparison";

export default function Render(props: any) {
	return (
		<CodeComparison
			beforeCode={Shared.beforeCode}
			afterCode={Shared.afterCode}
			language="typescript"
			filename="middleware.ts"
			lightTheme="github-light"
			darkTheme="github-dark"
			highlightColor="rgba(101, 117, 133, 0.16)"
		/>
	);
}
