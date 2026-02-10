import type { ComponentProps } from "react";
import React from "react";
import * as Shared from "../shared-demos";
import { OrbitsBackground } from "@/components/shadcn/Orbits";

type RenderProps = ComponentProps<typeof OrbitsBackground>;

export default function Render(props: RenderProps) {
  return <OrbitsBackground {...props} />;
}
