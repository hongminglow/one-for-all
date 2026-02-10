import React from 'react';
import * as Shared from '../shared-demos';
import BeamCollision from "@/components/shadcn/BeamCollision";

type RenderProps = Record<string, unknown>;


export default function Render(props: RenderProps) {
  return (
    <div className="w-full overflow-hidden rounded-3xl border border-white/5 shadow-2xl">
<BeamCollision />
</div>
  );
}