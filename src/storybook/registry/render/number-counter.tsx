import React from "react";
import * as Shared from "../shared-demos";
import { NumberCounter } from "@/components/jolyui/NumberCounter";

type RenderProps = Record<string, unknown>;

export default function Render(props: RenderProps) {
  return (
    <div className="flex items-center justify-center" style={{ height: 140 }}>
      <div className="text-center">
        <h3 className="mb-2 font-medium text-muted-foreground text-sm">
          Basic Counter
        </h3>
        <NumberCounter
          value={1234.56}
          decimals={2}
          prefix="$"
          className="font-bold text-4xl"
        />
      </div>
    </div>
  );
}
