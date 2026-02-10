import React from 'react';
import * as Shared from '../shared-demos';
import { VideoText } from "@/components/magicui/VideoText";

export default function Render(props: any) {
  return (
    <div className="relative h-[200px] w-full overflow-hidden">
<VideoText src="https://cdn.magicui.design/ocean-small.webm">
OCEAN
</VideoText>
</div>
  );
}