import React from "react";
import * as Shared from "../shared-demos";
import { CodeComparison } from "@/components/ui/code-comparison";

type RenderProps = Record<string, unknown>;

export default function Render(props: RenderProps) {
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
