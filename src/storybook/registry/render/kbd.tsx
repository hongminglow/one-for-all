import React from "react";
import * as Shared from "../shared-demos";
import Kbd from "@/components/shadcn/Kbd";

type RenderProps = Record<string, unknown>;

export default function Render(props: RenderProps) {
  return (
    <div className="w-full py-10">
      <Kbd keys={["COMMAND", "K"]} />
    </div>
  );
}
