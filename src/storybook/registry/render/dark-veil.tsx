import type { ComponentProps } from "react";
import React from "react";
import * as Shared from "../shared-demos";
import DarkVeil from "@/components/reactbits/DarkVeil";

type RenderProps = ComponentProps<typeof DarkVeil>;

export default function Render(props: RenderProps) {
  return (
    <div className="relative h-[220px] w-full overflow-hidden rounded-2xl border border-[var(--sb-border-2)] bg-(--sb-bg)">
      <DarkVeil
        hueShift={props?.hueShift ?? 0}
        noiseIntensity={props?.noiseIntensity ?? 0}
        scanlineIntensity={props?.scanlineIntensity ?? 0}
        speed={props?.speed ?? 0.5}
        scanlineFrequency={props?.scanlineFrequency ?? 0}
        warpAmount={props?.warpAmount ?? 0}
        resolutionScale={props?.resolutionScale ?? 1}
        {...props}
      />
    </div>
  );
}
