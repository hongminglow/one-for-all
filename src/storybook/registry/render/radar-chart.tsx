import React from 'react';
import * as Shared from '../shared-demos';
import RadarDots from "@/components/shadcn/RadarDots";

type RenderProps = Record<string, unknown>;


export default function Render(props: RenderProps) {
  return (
    <div className="w-full p-4">
<RadarDots />
</div>
  );
}