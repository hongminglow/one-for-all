import type { ComponentProps } from "react";
import React from 'react';
import * as Shared from '../shared-demos';
import Lightning from "@/components/reactbits/Lightning";

type RenderProps = ComponentProps<typeof Lightning>;


export default function Render(props: RenderProps) {
  return (
    <div className="relative h-[600px] w-full overflow-hidden rounded-2xl border border-[var(--sb-border-2)] bg-(--sb-bg)">
<Lightning
hue={props?.hue ?? 260}
xOffset={props?.xOffset ?? 0}
speed={props?.speed ?? 1}
intensity={props?.intensity ?? 1}
size={props?.size ?? 1}
{...props}
/>
</div>
  );
}