import React from 'react';
import * as Shared from '../shared-demos';
import CurvedLoop from "@/components/reactbits/CurvedLoop";

export default function Render(props: any) {
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