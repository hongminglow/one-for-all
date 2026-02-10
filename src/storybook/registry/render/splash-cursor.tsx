import type { ComponentProps } from "react";
import React from 'react';
import * as Shared from '../shared-demos';
import SplashCursor from "@/components/reactbits/SplashCursor";

type RenderProps = ComponentProps<typeof SplashCursor>;


export default function Render(props: RenderProps) {
  return (
    <div className="w-full h-[500px] bg-black relative overflow-hidden rounded-xl border border-(--sb-border)">
<SplashCursor
SIM_RESOLUTION={props?.SIM_RESOLUTION ?? 128}
DYE_RESOLUTION={props?.DYE_RESOLUTION ?? 1024}
CAPTURE_RESOLUTION={props?.CAPTURE_RESOLUTION ?? 512}
DENSITY_DISSIPATION={props?.DENSITY_DISSIPATION ?? 3.0}
VELOCITY_DISSIPATION={props?.VELOCITY_DISSIPATION ?? 0.2}
PRESSURE={props?.PRESSURE ?? 0.8}
PRESSURE_ITERATIONS={props?.PRESSURE_ITERATIONS ?? 20}
CURL={props?.CURL ?? 30}
SPLAT_RADIUS={props?.SPLAT_RADIUS ?? 0.25}
SPLAT_FORCE={props?.SPLAT_FORCE ?? 1500}
SHADING={props?.SHADING ?? true}
COLOR_UPDATE_SPEED={props?.COLOR_UPDATE_SPEED ?? 10}
BACK_COLOR={props?.BACK_COLOR ?? { r: 0, g: 0, b: 0 }}
TRANSPARENT={props?.TRANSPARENT ?? true}
{...props}
/>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<h3 className="text-white text-3xl font-bold opacity-50">
Move Mouse
</h3>
</div>
</div>
  );
}