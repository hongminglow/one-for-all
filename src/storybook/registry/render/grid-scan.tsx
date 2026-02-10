import type { ComponentProps } from "react";
import React from 'react';
import * as Shared from '../shared-demos';
import { GridScan } from "@/components/reactbits/GridScan";

type RenderProps = ComponentProps<typeof GridScan>;


export default function Render(props: RenderProps) {
  return (
    <div style={{ width: "100%", height: "600px", position: "relative" }}>
<GridScan
sensitivity={0.55}
lineThickness={1}
gridScale={props?.gridScale ?? 0.1}
linesColor={props?.linesColor ?? "#392e4e"}
scanColor={props?.scanColor ?? "#FF9FFC"}
scanOpacity={props?.scanOpacity ?? 0.4}
enablePost
bloomIntensity={0.6}
chromaticAberration={0.002}
noiseIntensity={0.01}
{...props}
/>
</div>
  );
}