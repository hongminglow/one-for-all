import React from 'react';
import * as Shared from '../shared-demos';
import BeamCollision from "@/components/shadcn/BeamCollision";

export default function Render(props: any) {
  return (
    <div className="w-full overflow-hidden rounded-3xl border border-white/5 shadow-2xl">
<BeamCollision />
</div>
  );
}