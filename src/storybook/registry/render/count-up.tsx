import React from 'react';
import * as Shared from '../shared-demos';
import CountUp from "@/components/reactbits/CountUp";

export default function Render(props: any) {
  return (
    <div className="flex items-center justify-center w-full h-full min-h-[200px]">
<CountUp
from={props?.from ?? 0}
to={props?.to ?? 100}
separator={props?.separator ?? ","}
direction={props?.direction ?? "up"}
duration={props?.duration ?? 1}
className={`text-[64px] font-black text-(--sb-text-strong) ${props?.className ?? ""}`}
{...props}
/>
</div>
  );
}