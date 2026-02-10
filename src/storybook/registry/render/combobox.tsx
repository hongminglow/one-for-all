import React from "react";
import * as Shared from "../shared-demos";
import ComboboxDemo from "@/components/shadcn/ComboboxDemo";

type RenderProps = Record<string, unknown>;

export default function Render(props: RenderProps) {
  return (
    <div className="w-full flex items-center justify-center p-10">
      <ComboboxDemo />
    </div>
  );
}
