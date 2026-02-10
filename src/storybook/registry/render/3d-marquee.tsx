import React from 'react';
import * as Shared from '../shared-demos';
import { Demo as ThreeDMarquee } from "@/components/shadcn/ThreeDMarquee";

type RenderProps = Record<string, unknown>;


export default function Render(props: RenderProps) {
  return (
    <div className="w-full overflow-hidden">
<ThreeDMarquee />
</div>
  );
}