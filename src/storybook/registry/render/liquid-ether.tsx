import React from 'react';
import * as Shared from '../shared-demos';
import LiquidEther from "@/components/reactbits/LiquidEther";

export default function Render(props: any) {
  return (
    <div className="relative h-[220px] w-full overflow-hidden rounded-2xl border border-[var(--sb-border-2)] bg-(--sb-bg)">
<LiquidEther resolution={props?.resolution ?? 1} {...props} />
</div>
  );
}