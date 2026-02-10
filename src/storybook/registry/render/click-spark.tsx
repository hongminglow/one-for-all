import React from 'react';
import * as Shared from '../shared-demos';
import ClickSpark from "@/components/reactbits/ClickSpark";

export default function Render(props: any) {
  return (
    <div className="w-full min-h-[400px] p-8 bg-(--sb-bg) rounded-xl border border-(--sb-border)">
<ClickSpark
sparkColor={props?.sparkColor ?? "#fff"}
sparkSize={props?.sparkSize ?? 10}
sparkRadius={props?.sparkRadius ?? 15}
sparkCount={props?.sparkCount ?? 8}
duration={props?.duration ?? 400}
{...props}
>
<div className="flex flex-col items-center gap-4">
<h2 className="text-(--sb-text-strong) text-2xl font-bold">
Click anywhere!
</h2>
<p className="text-[var(--sb-text-dim)]">
Interactive spark effect on click
</p>
</div>
</ClickSpark>
</div>
  );
}