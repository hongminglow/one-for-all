import React from 'react';
import * as Shared from '../shared-demos';
import DecryptedText from "@/components/reactbits/DecryptedText";

export default function Render(props: any) {
  return (
    <div
className="w-full min-h-[200px] rounded-2xl border border-[var(--sb-border-2)] bg-(--sb-panel) p-8 flex items-center justify-center"
style={{ minHeight: 200 }}
>
<div className="text-[28px] font-black text-(--sb-text-strong)">
<DecryptedText
text={props?.text ?? "Hover to decrypt!"}
speed={props?.speed ?? 50}
maxIterations={props?.maxIterations ?? 10}
sequential={props?.sequential ?? false}
revealDirection={props?.revealDirection ?? "start"}
animateOn={props?.animateOn ?? "hover"}
{...props}
/>
</div>
</div>
  );
}