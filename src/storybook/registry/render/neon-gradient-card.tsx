import React from 'react';
import * as Shared from '../shared-demos';
import { NeonGradientCard } from "@/components/magicui/NeonGradientCard";

type RenderProps = Record<string, unknown>;


export default function Render(props: RenderProps) {
  return (
    <div className="w-full flex justify-center justify-self-center max-w-[520px]">
<NeonGradientCard className="max-w-sm items-center justify-center text-center">
<span className="pointer-events-none z-10 h-full bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-3xl leading-none font-bold tracking-tighter text-balance whitespace-pre-wrap text-transparent md:text-5xl xl:text-6xl dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
Neon Gradient Card
</span>
</NeonGradientCard>
</div>
  );
}