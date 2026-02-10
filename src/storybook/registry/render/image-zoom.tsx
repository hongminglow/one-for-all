import type { ComponentProps } from "react";
import React from 'react';
import * as Shared from '../shared-demos';
import ImageZoom from "@/components/shadcn/ImageZoom";

type RenderProps = ComponentProps<typeof ImageZoom>;

export default function Render(props: RenderProps) {
  return (
    <div className="w-full flex items-center justify-center py-10">
<ImageZoom
src={
props?.src ??
"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80"
}
alt="Demo Image"
className="h-64 w-96"
/>
</div>
  );
}