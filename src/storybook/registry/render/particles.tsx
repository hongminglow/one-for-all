import type { ComponentProps } from "react";
import React from 'react';
import * as Shared from '../shared-demos';
import Particles from "@/components/reactbits/Particles";

type RenderProps = ComponentProps<typeof Particles>;


export default function Render(props: RenderProps) {
  return (
    <div className="relative h-[220px] w-full overflow-hidden rounded-2xl border border-[var(--sb-border-2)] bg-(--sb-bg)">
<Particles
particleCount={props?.particleCount ?? 200}
particleSpread={props?.particleSpread ?? 10}
speed={props?.speed ?? 0.1}
particleColors={props?.particleColors ?? ["#ffffff", "#ffffff"]}
moveParticlesOnHover={props?.moveParticlesOnHover ?? true}
particleBaseSize={props?.particleBaseSize ?? 100}
alphaParticles={props?.alphaParticles ?? false}
disableRotation={props?.disableRotation ?? false}
{...props}
/>
</div>
  );
}