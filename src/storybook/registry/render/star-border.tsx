import type { ComponentProps } from "react";
import React from "react";
import * as Shared from "../shared-demos";
import StarBorder from "@/components/reactbits/StarBorder";

type RenderProps = ComponentProps<typeof StarBorder>;

export default function Render(props: RenderProps) {
  return (
    <div className="w-full flex items-center justify-center min-h-[300px] bg-black rounded-xl border border-(--sb-border)">
      <StarBorder
        as={props?.as || "button"}
        className={props?.className || ""}
        color={props?.color || "cyan"}
        speed={props?.speed || "6s"}
        thickness={props?.thickness}
        {...props}
      >
        <div className="text-white px-8 py-4">Hover Me</div>
      </StarBorder>
    </div>
  );
}
