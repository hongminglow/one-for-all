import React from "react";
import * as Shared from "../shared-demos";
import { VideoText } from "@/components/magicui/VideoText";

type RenderProps = Record<string, unknown>;

export default function Render(props: RenderProps) {
  return (
    <div className="relative h-[200px] w-full overflow-hidden">
      <VideoText src="https://cdn.magicui.design/ocean-small.webm">
        OCEAN
      </VideoText>
    </div>
  );
}
