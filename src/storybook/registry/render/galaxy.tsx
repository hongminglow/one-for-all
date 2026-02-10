import type { ComponentProps } from "react";
import React from "react";
import * as Shared from "../shared-demos";
import Galaxy from "@/components/reactbits/Galaxy";

type RenderProps = ComponentProps<typeof Galaxy>;

export default function Render(props: RenderProps) {
  return (
    <div className="relative h-[220px] w-full overflow-hidden rounded-2xl border border-[var(--sb-border-2)] bg-(--sb-bg)">
      <Galaxy
        focal={props?.focal ?? [0.5, 0.5]}
        rotation={props?.rotation ?? [1.0, 0.0]}
        starSpeed={props?.starSpeed ?? 0.5}
        density={props?.density ?? 1.5}
        hueShift={props?.hueShift ?? 140}
        disableAnimation={props?.disableAnimation ?? false}
        speed={props?.speed ?? 1.0}
        mouseInteraction={props?.mouseInteraction ?? true}
        glowIntensity={props?.glowIntensity ?? 0.3}
        saturation={props?.saturation ?? 0.0}
        mouseRepulsion={props?.mouseRepulsion ?? true}
        twinkleIntensity={props?.twinkleIntensity ?? 0.3}
        rotationSpeed={props?.rotationSpeed ?? 0.1}
        repulsionStrength={props?.repulsionStrength ?? 2}
        autoCenterRepulsion={props?.autoCenterRepulsion ?? 0}
        transparent={props?.transparent ?? true}
        {...props}
      />
    </div>
  );
}
