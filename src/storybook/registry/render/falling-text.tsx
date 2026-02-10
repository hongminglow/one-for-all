import React from 'react';
import * as Shared from '../shared-demos';
import FallingText from "@/components/reactbits/FallingText";

type RenderProps = Record<string, unknown>;


export default function Render(props: RenderProps) {
  return (
    <div
className="w-full min-h-[320px] rounded-2xl bg-(--sb-panel) p-2 flex justify-center"
style={{ minHeight: 320 }}
>
<div className="w-full text-(--sb-text-strong)">
<FallingText
text={`React Bits is a library of animated and interactive React components designed to streamline UI development and simplify your workflow.`}
highlightWords={[
"React",
"Bits",
"animated",
"components",
"simplify",
]}
trigger="hover"
backgroundColor="transparent"
wireframes={false}
gravity={0.56}
fontSize="2rem"
mouseConstraintStiffness={0.9}
/>
</div>
</div>
  );
}