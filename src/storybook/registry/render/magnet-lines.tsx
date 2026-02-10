import type { ComponentProps } from "react";
import React from "react";
import * as Shared from "../shared-demos";
import MagnetLines from "@/components/reactbits/MagnetLines";

type RenderProps = ComponentProps<typeof MagnetLines>;

export default function Render(props: RenderProps) {
  return (
    <div className="flex items-center justify-center w-full min-h-[400px] p-8 bg-(--sb-bg) rounded-xl border border-(--sb-border)">
      <MagnetLines
        rows={props?.rows ?? 9}
        columns={props?.columns ?? 9}
        containerSize={props?.containerSize ?? "40vmin"}
        lineColor={props?.lineColor ?? "#efefef"}
        lineWidth={props?.lineWidth ?? "1vmin"}
        lineHeight={props?.lineHeight ?? "6vmin"}
        baseAngle={props?.baseAngle ?? -10}
        {...props}
      />
    </div>
  );
}
