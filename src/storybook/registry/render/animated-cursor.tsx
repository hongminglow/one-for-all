import React from "react";
import * as Shared from "../shared-demos";
import { Demo as AnimatedCursor } from "@/components/shadcn/AnimatedCursor";

type RenderProps = Record<string, unknown>;

export default function Render(props: RenderProps) {
  return (
    <div className="w-full py-10">
      <AnimatedCursor />
    </div>
  );
}
