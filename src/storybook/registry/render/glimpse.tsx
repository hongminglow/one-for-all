import React from "react";
import * as Shared from "../shared-demos";
import { Demo as Glimpse } from "@/components/shadcn/Glimpse";

type RenderProps = Record<string, unknown>;

export default function Render(props: RenderProps) {
  return (
    <div className="w-full flex items-center justify-center py-10">
      <Glimpse />
    </div>
  );
}
