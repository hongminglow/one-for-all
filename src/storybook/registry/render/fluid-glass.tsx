import React from 'react';
import * as Shared from '../shared-demos';
import FluidGlass from "@/components/reactbits/FluidGlass";

export default function Render(props: any) {
  return (
    <div style={{ height: "600px", position: "relative" }}>
<FluidGlass
mode="lens" // or "bar", "cube"
lensProps={{
scale: 0.25,
ior: 1.15,
thickness: 2,
chromaticAberration: 0.05,
anisotropy: 0.01,
transmission: 1,
roughness: 0,
}}
/>
</div>
  );
}