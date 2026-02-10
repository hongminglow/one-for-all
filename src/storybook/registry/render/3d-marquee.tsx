import React from 'react';
import * as Shared from '../shared-demos';
import { Demo as ThreeDMarquee } from "@/components/shadcn/ThreeDMarquee";

export default function Render(props: any) {
  return (
    <div className="w-full overflow-hidden">
<ThreeDMarquee />
</div>
  );
}