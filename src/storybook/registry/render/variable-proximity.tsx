import type { ComponentProps } from "react";
import React from "react";
import * as Shared from "../shared-demos";

type RenderProps = ComponentProps<typeof Shared.VariableProximityWrapper>;

export default function Render(props: RenderProps) {
  return <Shared.VariableProximityWrapper {...props} />;
}
