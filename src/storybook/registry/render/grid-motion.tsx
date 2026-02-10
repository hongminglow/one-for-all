import React from 'react';
import * as Shared from '../shared-demos';
import GridMotion from "@/components/reactbits/GridMotion";

export default function Render(props: any) {
  return (
    <div className="relative h-[220px] w-full overflow-hidden rounded-2xl border border-[var(--sb-border-2)] bg-(--sb-bg)">
<GridMotion
// items={props?.items ?? []} // items are usually static, maybe leave default
gradientColor={props?.gradientColor ?? "black"}
{...props}
/>
</div>
  );
}