import type { ComponentProps } from "react";
import React from 'react';
import * as Shared from '../shared-demos';
import CurvedLoop from "@/components/reactbits/CurvedLoop";

type RenderProps = ComponentProps<typeof CurvedLoop>;


export default function Render(props: RenderProps) {
  return (
    <div className="w-full h-[300px] relative overflow-hidden">
<CurvedLoop
marqueeText="CURVED LOOP • CURVED LOOP •"
curveAmount={400}
speed={2}
direction="left"
interactive={true}
className="text-[32px] font-black text-(--sb-text-strong)"
{...props}
/>
</div>
  );
}