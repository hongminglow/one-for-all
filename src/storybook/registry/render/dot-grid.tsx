import React from "react";
import * as Shared from "../shared-demos";
import DotGrid from "@/components/reactbits/DotGrid";

type RenderProps = Record<string, unknown>;

export default function Render(props: RenderProps) {
  return (
    <div style={{ width: "100%", height: "600px", position: "relative" }}>
      <DotGrid
        dotSize={5}
        gap={15}
        baseColor="#271E37"
        activeColor="#5227FF"
        proximity={120}
        shockRadius={250}
        shockStrength={5}
        resistance={750}
        returnDuration={1.5}
      />
    </div>
  );
}
