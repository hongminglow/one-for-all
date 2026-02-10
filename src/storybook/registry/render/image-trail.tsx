import type { ComponentProps } from "react";
import React from 'react';
import * as Shared from '../shared-demos';
import ImageTrail from "@/components/reactbits/ImageTrail";

type RenderProps = ComponentProps<typeof ImageTrail>;


export default function Render(props: RenderProps) {
  return (
    <div className="w-full h-[500px] relative overflow-hidden bg-[#111] rounded-xl border border-(--sb-border)">
<ImageTrail
items={
props?.items || [
"https://images.unsplash.com/photo-1653896775515-951b43021b3b?q=80&w=600&auto=format",
"https://images.unsplash.com/photo-1548021682-1720ed403a5b?q=80&w=600&auto=format",
"https://images.unsplash.com/photo-1696429380069-23dcf7a6e12e?q=80&w=600&auto=format",
"https://images.unsplash.com/photo-1655635643532-fa9ba2648cbe?q=80&w=600&auto=format",
"https://images.unsplash.com/photo-1655635643420-b9646b617bbd?q=80&w=600&auto=format",
"https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=600&auto=format",
]
}
variant={props?.variant || 1}
{...props}
/>
</div>
  );
}