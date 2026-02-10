import React from "react";
import * as Shared from "../shared-demos";

type RenderProps = Record<string, unknown>;

export default function Render(props: RenderProps) {
  return (
    <div className="w-full rounded-2xl border border-[var(--sb-border-2)] bg-(--sb-card) p-6">
      <div className="text-[14px] font-black text-(--sb-text-strong)">
        Progress
      </div>
      <div className="mt-3 justify-self-center">
        <Shared.RadixProgressDemo />
      </div>
    </div>
  );
}
