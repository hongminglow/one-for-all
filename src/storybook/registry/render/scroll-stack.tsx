import React from 'react';
import * as Shared from '../shared-demos';
import ScrollStack from "@/components/reactbits/ScrollStack";

export default function Render(props: any) {
  return (
    <div className="w-full h-[600px] relative bg-[#060606] rounded-xl border border-(--sb-border) overflow-hidden">
<ScrollStack
itemDistance={props?.itemDistance || 50}
itemScale={props?.itemScale || 0.05}
itemStackDistance={props?.itemStackDistance || 20}
stackPosition={props?.stackPosition || "20%"}
scaleEndPosition={props?.scaleEndPosition || "10%"}
baseScale={props?.baseScale || 0.85}
scaleDuration={props?.scaleDuration || 0.5}
rotationAmount={props?.rotationAmount || 0}
blurAmount={props?.blurAmount || 0}
useWindowScroll={false}
{...props}
>
{[1, 2, 3, 4, 5].map((i) => (
<div
key={i}
className="scroll-stack-card bg-[#111] text-white flex items-center justify-center text-4xl font-bold border border-white/10"
>
Item {i}
</div>
))}
</ScrollStack>
</div>
  );
}