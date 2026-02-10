import React from "react";
import * as Shared from "../shared-demos";
import CodeEditor from "@/components/shadcn/CodeEditor";

type RenderProps = Record<string, unknown>;


export default function Render(props: RenderProps) {
  return (
    <div className="w-full max-w-[620px]">
      <CodeEditor
        code={`function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
`}
        language="javascript"
        filename="fibonacci.js"
      />
    </div>
  );
}
