import React from 'react';
import * as Shared from '../shared-demos';
import { Demo as VideoPlayer } from "@/components/shadcn/VideoPlayer";

export default function Render(props: any) {
  return (
    <div className="w-full py-10">
<VideoPlayer />
</div>
  );
}