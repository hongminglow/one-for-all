import type { ComponentProps } from "react";
import React from 'react';
import * as Shared from '../shared-demos';
import GradientText from "@/components/reactbits/GradientText";

type RenderProps = ComponentProps<typeof GradientText>;


export default function Render(props: RenderProps) {
  return (
    <div className="text-[32px] font-black">
<GradientText
colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
animationSpeed={3}
showBorder={false}
className="custom-class"
{...props}
>
Gradient Text
</GradientText>
</div>
  );
}