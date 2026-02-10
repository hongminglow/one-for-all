import React from 'react';
import * as Shared from '../shared-demos';
import RotateText from "@/components/jolyui/RotateText";

export default function Render(props: any) {
  return (
    <div
className="flex items-center justify-center"
style={{ height: 140 }}
>
<div className="text-[42px] font-black text-primary">
<span>Build </span>
<span className="inline-block text-primary">
<RotateText
words={["fast", "simple", "polished"]}
duration={props?.duration ?? 0.5}
pauseDuration={props?.pauseDuration ?? 1.2}
/>
</span>
</div>
</div>
  );
}