import React from 'react';
import * as Shared from '../shared-demos';
import GlitchText from "@/components/reactbits/GlitchText";

export default function Render(props: any) {
  return (
    <div
className="w-full min-h-[200px] rounded-2xl border border-[var(--sb-border-2)] bg-(--sb-panel) p-8 flex items-center justify-center"
style={{ minHeight: 200 }}
>
<GlitchText
speed={props?.speed ?? 1}
enableShadows={props?.enableShadows ?? true}
enableOnHover={props?.enableOnHover ?? true}
className="text-[4rem] font-bold text-(--sb-text-strong)"
{...props}
>
{props?.text ?? "GLITCH"}
</GlitchText>
</div>
  );
}