"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
}

export default function Progress({
  value,
  max = 100,
  className,
  ...props
}: ProgressProps) {
  const clamped = Math.max(0, Math.min(max, value));
  const pct = (clamped / max) * 100;

  return (
    <div
      className={cn(
        "h-2 w-full overflow-hidden rounded-full bg-[var(--sb-selected)]",
        className,
      )}
      {...props}
    >
      <div
        className="h-full rounded-full bg-[var(--sb-accent)] transition-[width] duration-300"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
