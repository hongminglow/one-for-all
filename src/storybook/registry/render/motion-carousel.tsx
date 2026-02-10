import type { ComponentProps } from "react";
import React from 'react';
import * as Shared from '../shared-demos';
import { MotionCarousel } from "@/components/animate-ui/components/community/motion-carousel";

type RenderProps = ComponentProps<typeof MotionCarousel>;

export default function Render(props: RenderProps) {
  return (
    <div
className="flex items-center justify-center w-full px-4"
style={{ height: 420 }}
>
<MotionCarousel
slides={props?.slides ?? [0, 1, 2, 3, 4]}
options={{ loop: true }}
/>
</div>
  );
}