import React from "react";
import * as Shared from "../shared-demos";

type RenderProps = Record<string, unknown>;

export default function Render(props: RenderProps) {
  return <Shared.DraggableCardDemo />;
}
