import React from "react";
import * as Shared from "../shared-demos";
import { Demo as AnimatedTooltip } from "@/components/shadcn/AnimatedTooltip";

type RenderProps = Record<string, unknown>;

export default function Render(props: RenderProps) {
  return (
    <div className="w-full py-10">
      <AnimatedTooltip />
    </div>
  );
}
