import React from 'react';
import * as Shared from '../shared-demos';
import ScrollVelocity from "@/components/reactbits/ScrollVelocity";

export default function Render(props: any) {
  return (
    <div
className="w-full min-h-[300px] rounded-2xl border border-[var(--sb-border-2)] bg-(--sb-panel) p-4 flex flex-col justify-center overflow-hidden"
style={{ minHeight: 300 }}
>
<ScrollVelocity
texts={props?.texts ?? ["React Bits", "Scroll Velocity"]}
velocity={props?.velocity ?? 100}
className="custom-scroll-text text-(--sb-text-strong)"
{...props}
/>
</div>
  );
}