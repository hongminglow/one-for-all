import type { ComponentProps } from "react";
import React from 'react';
import * as Shared from '../shared-demos';
import CircularGallery from "@/components/reactbits/CircularGallery";

type RenderProps = ComponentProps<typeof CircularGallery>;


export default function Render(props: RenderProps) {
  return (
    <div className="w-full h-[600px] position-relative bg-black rounded-xl border border-(--sb-border) overflow-hidden">
<CircularGallery
bend={props?.bend || 3}
textColor={props?.textColor || "#ffffff"}
borderRadius={props?.borderRadius || 0.05}
font={props?.font || "bold 30px Figtree"}
scrollSpeed={props?.scrollSpeed || 2}
scrollEase={props?.scrollEase || 0.05}
{...props}
/>
</div>
  );
}