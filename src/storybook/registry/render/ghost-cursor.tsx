import type { ComponentProps } from "react";
import React from 'react';
import * as Shared from '../shared-demos';
import GhostCursor from "@/components/reactbits/GhostCursor";

type RenderProps = ComponentProps<typeof GhostCursor>;


export default function Render(props: RenderProps) {
  return (
    <div className="relative w-full h-[400px] bg-black overflow-hidden rounded-xl border border-(--sb-border)">
<GhostCursor
color={props?.color ?? "#B19EEF"}
brightness={props?.brightness ?? 2}
trailLength={props?.trailLength ?? 50}
inertia={props?.inertia ?? 0.5}
grainIntensity={props?.grainIntensity ?? 0.05}
bloomStrength={props?.bloomStrength ?? 0.1}
bloomRadius={props?.bloomRadius ?? 1.0}
bloomThreshold={props?.bloomThreshold ?? 0.025}
{...props}
/>
<div className="absolute inset-x-0 bottom-0 p-6 bg-linear-to-t from-black/80 to-transparent pointer-events-none">
<h3 className="text-white text-lg font-bold">Ghost Cursor</h3>
<p className="text-white/60 text-sm">
Interactive volumetric cursor trail
</p>
</div>
</div>
  );
}