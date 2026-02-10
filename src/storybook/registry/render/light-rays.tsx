import React from 'react';
import * as Shared from '../shared-demos';
import LightRays from "@/components/reactbits/LightRays";

export default function Render(props: any) {
  return (
    <div className="relative h-[220px] w-full overflow-hidden rounded-2xl border border-[var(--sb-border-2)] bg-(--sb-bg)">
<LightRays
raysOrigin={props?.raysOrigin ?? "top-center"}
raysColor={props?.raysColor ?? "#ffffff"}
raysSpeed={props?.raysSpeed ?? 1}
lightSpread={props?.lightSpread ?? 1}
rayLength={props?.rayLength ?? 2}
pulsating={props?.pulsating ?? false}
fadeDistance={props?.fadeDistance ?? 1}
saturation={props?.saturation ?? 1}
followMouse={props?.followMouse ?? true}
mouseInfluence={props?.mouseInfluence ?? 0.1}
noiseAmount={props?.noiseAmount ?? 0}
distortion={props?.distortion ?? 0}
{...props}
/>
</div>
  );
}