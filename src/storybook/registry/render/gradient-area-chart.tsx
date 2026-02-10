import React from 'react';
import * as Shared from '../shared-demos';
import AreaGradient from "@/components/shadcn/AreaGradient";

type RenderProps = Record<string, unknown>;


export default function Render(props: RenderProps) {
  return (
    <div className="w-full max-w-[600px] p-4">
<AreaGradient />
</div>
  );
}