import React from "react";
import * as Shared from "../shared-demos";
import MiniCalendar from "@/components/shadcn/MiniCalendar";

type RenderProps = Record<string, unknown>;

export default function Render(props: RenderProps) {
  return (
    <div className="w-full py-10">
      <MiniCalendar />
    </div>
  );
}
