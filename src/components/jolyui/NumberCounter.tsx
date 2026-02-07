"use client";

import * as React from "react";

import { cn } from "@/lib/cn";

export interface NumberCounterProps {
  value: number;
  className?: string;
  precision?: number;
  durationMs?: number;
}

export default function NumberCounter({
  value,
  precision = 0,
  durationMs = 700,
  className,
}: NumberCounterProps) {
  const [shown, setShown] = React.useState(value);
  const lastValueRef = React.useRef(value);

  React.useEffect(() => {
    const from = lastValueRef.current;
    const to = value;
    lastValueRef.current = value;

    const start = performance.now();
    let raf = 0;

    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / durationMs);
      const eased = 1 - Math.pow(1 - p, 3);
      setShown(from + (to - from) * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value, durationMs]);

  return (
    <span className={cn("tabular-nums", className)}>
      {shown.toFixed(precision)}
    </span>
  );
}
