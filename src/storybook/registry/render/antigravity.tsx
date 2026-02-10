import React from 'react';
import * as Shared from '../shared-demos';
import Antigravity from "@/components/reactbits/Antigravity";

export default function Render(props: any) {
  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-2xl bg-black">
<Antigravity
count={props?.count ?? 300}
magnetRadius={props?.magnetRadius ?? 10}
ringRadius={props?.ringRadius ?? 10}
waveSpeed={props?.waveSpeed ?? 0.4}
waveAmplitude={props?.waveAmplitude ?? 1}
particleSize={props?.particleSize ?? 2}
lerpSpeed={props?.lerpSpeed ?? 0.1}
color={props?.color ?? "#FF9FFC"}
{...props}
/>
</div>
  );
}