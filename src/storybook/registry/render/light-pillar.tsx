import type { ComponentProps } from "react";
import React from 'react';
import * as Shared from '../shared-demos';
import LightPillar from "@/components/reactbits/LightPillar";

type RenderProps = ComponentProps<typeof LightPillar>;


export default function Render(props: RenderProps) {
  return (
    <div className="relative h-[220px] w-full overflow-hidden rounded-2xl border border-[var(--sb-border-2)] bg-(--sb-bg)">
<LightPillar
topColor={props?.topColor ?? "#5227FF"}
bottomColor={props?.bottomColor ?? "#FF9FFC"}
intensity={props?.intensity ?? 1}
rotationSpeed={props?.rotationSpeed ?? 0.3}
interactive={props?.interactive ?? false}
glowAmount={props?.glowAmount ?? 0.005}
pillarWidth={props?.pillarWidth ?? 3.0}
pillarHeight={props?.pillarHeight ?? 0.4}
noiseIntensity={props?.noiseIntensity ?? 0.5}
pillarRotation={props?.pillarRotation ?? 15}
quality={props?.quality ?? "high"}
{...props}
/>
</div>
  );
}