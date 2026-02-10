import React from 'react';
import * as Shared from '../shared-demos';
import Sandbox from "@/components/shadcn/Sandbox";

type RenderProps = Record<string, unknown>;


export default function Render(props: RenderProps) {
  return (
    <div className="w-full max-w-[900px]">
<Sandbox
code={`<button className="btn">
Click me
</button>`}
preview={
<button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
Click me
</button>
}
/>
</div>
  );
}