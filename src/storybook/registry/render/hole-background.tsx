import React from 'react';
import * as Shared from '../shared-demos';
import { HoleBackground } from "@/components/animate-ui/components/backgrounds/hole";

export default function Render(props: any) {
  return (
    <div className="relative h-[400px] w-full overflow-hidden rounded-xl border">
<HoleBackground strokeColor="#8b5cf6" fillColor="#1a0f2e" />
<div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
<h2 className="text-4xl font-bold text-white drop-shadow-lg">
Hole Background
</h2>
</div>
</div>
  );
}