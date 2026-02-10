import React from 'react';
import * as Shared from '../shared-demos';
import SpotlightCard from "@/components/reactbits/SpotlightCard";

export default function Render(props: any) {
  return (
    <div className="flex items-center justify-center p-8 bg-black min-h-[400px] rounded-xl">
<SpotlightCard
className="w-[300px] h-[400px] rounded-xl border border-white/10 bg-white/5 p-6 text-white relative overflow-hidden"
spotlightColor="rgba(255, 255, 255, 0.25)"
>
<div className="text-2xl font-bold relative z-10">Spotlight</div>
<p className="mt-4 text-white/60 relative z-10">
Hover over this card to see the spotlight effect.
</p>
</SpotlightCard>
</div>
  );
}