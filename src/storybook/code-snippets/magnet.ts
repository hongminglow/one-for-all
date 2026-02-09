export const code = `"use client";

import * as React from "react";

export interface MagnetProps {
  children: React.ReactNode;
  strength?: number;
  radius?: number;
  className?: string;
}

export default function Magnet({
  children,
  strength = 0.25,
  radius = 160,
  className,
}: MagnetProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [transform, setTransform] = React.useState("translate3d(0,0,0)");

  const reset = React.useCallback(() => {
    setTransform("translate3d(0,0,0)");
  }, []);

  const onMove = React.useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      const node = ref.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      if (dist > radius) {
        reset();
        return;
      }
      const nx = dx / Math.max(1, radius);
      const ny = dy / Math.max(1, radius);
      setTransform(
        \`translate3d(\${nx * rect.width * strength}px, \${ny * rect.height * strength}px, 0)\`,
      );
    },
    [radius, reset, strength],
  );

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={reset}
      className={className}
      style={{ transform, transition: "transform 120ms ease-out" }}
    >
      {children}
    </div>
  );
}
`;
