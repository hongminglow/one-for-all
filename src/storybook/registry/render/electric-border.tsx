import React from 'react';
import * as Shared from '../shared-demos';
import ElectricBorder from "@/components/reactbits/ElectricBorder";

export default function Render(props: any) {
  return (
    <div className="flex items-center justify-center w-full h-full p-8">
<ElectricBorder
color={props?.color ?? "#7df9ff"}
speed={props?.speed ?? 1}
chaos={props?.chaos ?? 0.12}
borderRadius={props?.borderRadius ?? 16}
{...props}
>
<div className="p-6 bg-(--sb-card) text-(--sb-text-strong) rounded-[inherit] border border-(--sb-border)">
<p className="font-bold">Electric Border</p>
<p className="text-sm opacity-70">A glowing, animated wrapper.</p>
</div>
</ElectricBorder>
</div>
  );
}