import type { ComponentProps } from "react";
import React from "react";
import * as Shared from "../shared-demos";
import Orbs from "@/components/reactbits/Orbs";

type RenderProps = ComponentProps<typeof Orbs>;

export default function Render(props: RenderProps) {
  return (
    <div className="relative h-[220px] w-full overflow-hidden rounded-2xl border border-[var(--sb-border-2)] bg-(--sb-bg)">
      <Orbs
        hue={props?.hue ?? 0}
        hoverIntensity={props?.hoverIntensity ?? 0.2}
        rotateOnHover={props?.rotateOnHover ?? true}
        forceHoverState={props?.forceHoverState ?? false}
        backgroundColor={props?.backgroundColor ?? "transparent"}
        {...props}
      />
    </div>
  );
}
