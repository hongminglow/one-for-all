import React from 'react';
import * as Shared from '../shared-demos';
import MagicBento from "@/components/reactbits/MagicBento";

export default function Render(props: any) {
  return (
    <div className="w-full min-h-[600px] bg-[#030014] rounded-xl border border-(--sb-border) overflow-hidden">
<MagicBento
textAutoHide={props?.textAutoHide ?? true}
enableStars={props?.enableStars ?? true}
enableSpotlight={props?.enableSpotlight ?? true}
enableBorderGlow={props?.enableBorderGlow ?? true}
enableTilt={props?.enableTilt ?? false}
enableMagnetism={props?.enableMagnetism ?? true}
clickEffect={props?.clickEffect ?? true}
spotlightRadius={props?.spotlightRadius || 300}
particleCount={props?.particleCount || 12}
glowColor={props?.glowColor || "132, 0, 255"}
{...props}
/>
</div>
  );
}