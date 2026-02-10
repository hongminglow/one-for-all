import React from "react";
import * as Shared from "../shared-demos";
import ThreeDCard from "@/components/shadcn/ThreeDCard";

type RenderProps = Record<string, unknown>;

export default function Render(props: RenderProps) {
  return (
    <div className="w-full flex items-center justify-center py-10">
      <ThreeDCard />
    </div>
  );
}
