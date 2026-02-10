import type { ComponentProps } from "react";
import React from 'react';
import * as Shared from '../shared-demos';
import FloatingLines from "@/components/reactbits/FloatingLines";

type RenderProps = ComponentProps<typeof FloatingLines>;


export default function Render(props: RenderProps) {
  return (
    <div className="relative h-[220px] w-full overflow-hidden rounded-2xl border border-[var(--sb-border-2)] bg-(--sb-bg)">
<FloatingLines
animationSpeed={props?.animationSpeed ?? 1}
interactive={props?.interactive ?? true}
bendRadius={props?.bendRadius ?? 5}
bendStrength={props?.bendStrength ?? -0.5}
mouseDamping={props?.mouseDamping ?? 0.05}
parallax={props?.parallax ?? true}
parallaxStrength={props?.parallaxStrength ?? 0.2}
{...props}
/>
</div>
  );
}