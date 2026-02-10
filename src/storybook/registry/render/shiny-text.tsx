import React from 'react';
import * as Shared from '../shared-demos';
import ShinyText from "@/components/reactbits/ShinyText";

export default function Render(props: any) {
  return (
    <div
className="text-[28px] font-black tracking-tight"
style={{ width: "100%" }}
>
<ShinyText
text="✨ Shiny Text Effect"
speed={2}
delay={0}
color="var(--sb-text-muted)"
shineColor="var(--sb-text-strong)"
spread={120}
direction="left"
yoyo={false}
pauseOnHover={false}
disabled={false}
{...props}
/>
</div>
  );
}