import type { ComponentProps } from "react";
import React from "react";
import * as Shared from "../shared-demos";
import ColorBends from "@/components/reactbits/ColorBends";

type RenderProps = ComponentProps<typeof ColorBends>;

export default function Render(props: RenderProps) {
  return (
    <div className="relative h-[220px] w-full overflow-hidden rounded-2xl border border-[var(--sb-border-2)] bg-(--sb-bg)">
      <ColorBends
        rotation={props?.rotation ?? 45}
        speed={props?.speed ?? 0.2}
        transparent={props?.transparent ?? true}
        autoRotate={props?.autoRotate ?? 0}
        scale={props?.scale ?? 1}
        frequency={props?.frequency ?? 1}
        warpStrength={props?.warpStrength ?? 1}
        mouseInfluence={props?.mouseInfluence ?? 1}
        parallax={props?.parallax ?? 0.5}
        noise={props?.noise ?? 0.1}
        {...props}
      />
    </div>
  );
}
