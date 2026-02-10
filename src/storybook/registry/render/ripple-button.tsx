import React from "react";
import * as Shared from "../shared-demos";

type RenderProps = Record<string, unknown>;

export default function Render(props: RenderProps) {
  return (
    <div className="flex items-center justify-center" style={{ height: 220 }}>
      <Shared.RippleButton variant="outline">
        Click
        <Shared.RippleButtonRipples />
      </Shared.RippleButton>
    </div>
  );
}
