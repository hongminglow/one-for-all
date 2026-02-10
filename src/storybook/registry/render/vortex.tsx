import type { ComponentProps } from "react";
import React from "react";
import * as Shared from "../shared-demos";
import { Vortex } from "@/components/shadcn/Vortex";

type RenderProps = ComponentProps<typeof Vortex>;

export default function Render(props: RenderProps) {
  return <Vortex {...props} />;
}
