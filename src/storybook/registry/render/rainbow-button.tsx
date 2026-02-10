import React from 'react';
import * as Shared from '../shared-demos';
import RainbowButton from "@/components/jolyui/RainbowButton";

export default function Render(props: any) {
  return (
    <div
className="flex items-center justify-center"
style={{ height: 160 }}
>
<RainbowButton
duration={props?.duration ?? 2}
borderWidth={props?.borderWidth ?? 2}
animated={props?.animated ?? true}
>
{props?.text ?? "Rainbow Button"}
</RainbowButton>
</div>
  );
}