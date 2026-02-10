import React from 'react';
import * as Shared from '../shared-demos';
import BarHorizontal from "@/components/shadcn/BarHorizontal";

type RenderProps = Record<string, unknown>;


export default function Render(props: RenderProps) {
  return (
    <div className="w-full max-w-[600px] p-4">
<BarHorizontal />
</div>
  );
}