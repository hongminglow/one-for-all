import React from 'react';
import * as Shared from '../shared-demos';
import StickerPeel from "@/components/reactbits/StickerPeel";

export default function Render(props: any) {
  return (
    <div className="w-full flex items-center justify-center overflow-hidden bg-black min-h-[400px] rounded-xl border border-(--sb-border) relative">
<StickerPeel
imageSrc={
props?.imageSrc ??
"https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=500&auto=format&fit=crop&q=60"
}
width={props?.width ?? 300}
rotate={props?.rotate ?? 15}
peelBackHoverPct={props?.peelBackHoverPct ?? 30}
peelBackActivePct={props?.peelBackActivePct ?? 40}
peelDirection={props?.peelDirection ?? 0}
shadowIntensity={props?.shadowIntensity ?? 0.6}
lightingIntensity={props?.lightingIntensity ?? 0.1}
{...props}
/>
</div>
  );
}