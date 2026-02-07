"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export interface HoleBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  holeSize?: number;
}

export default function HoleBackground({
  holeSize = 220,
  className,
  ...props
}: HoleBackgroundProps) {
  return (
    <div
      className={cn(
        "relative h-[360px] w-full overflow-hidden rounded-2xl border border-[var(--sb-border-2)] bg-[var(--sb-card)]",
        className,
      )}
      {...props}
    >
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 45%, rgba(0,0,0,0.0) 0, rgba(0,0,0,0.0) 30%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.75) 100%), radial-gradient(circle at 20% 20%, rgba(169,124,248,0.25), transparent 55%), radial-gradient(circle at 80% 60%, rgba(243,140,184,0.22), transparent 60%)",
          maskImage: `radial-gradient(circle ${holeSize}px at 50% 45%, transparent 0, transparent 65%, black 75%)`,
          WebkitMaskImage: `radial-gradient(circle ${holeSize}px at 50% 45%, transparent 0, transparent 65%, black 75%)`,
        }}
      />
    </div>
  );
}
