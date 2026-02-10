import React from 'react';
import * as Shared from '../shared-demos';
import PieDonut from "@/components/shadcn/PieDonut";

type RenderProps = Record<string, unknown>;


export default function Render(props: RenderProps) {
  return (
    <div className="w-full  p-4">
<PieDonut />
</div>
  );
}