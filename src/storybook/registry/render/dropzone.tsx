import React from "react";
import * as Shared from "../shared-demos";
import Dropzone from "@/components/shadcn/Dropzone";

type RenderProps = Record<string, unknown>;

export default function Render(props: RenderProps) {
  return (
    <div className="w-full">
      <Dropzone />
    </div>
  );
}
