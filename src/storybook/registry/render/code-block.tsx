import React from "react";
import * as Shared from "../shared-demos";
import CodeBlock from "@/components/shadcn/CodeBlock";

export default function Render(props: any) {
  return (
    <div className="w-full max-w-[620px]">
      <CodeBlock
        code={`const greeting = "Hello World";
console.log(greeting);
`}
        language="javascript"
      />
    </div>
  );
}
