export const code = `"use client";

import * as React from "react";

export interface CrosshairProps {
  color?: string;
  size?: number;
}

export default function Crosshair({
  color = "rgba(255,255,255,0.7)",
  size = 22,
}: CrosshairProps) {
  const [pos, setPos] = React.useState({ x: 0, y: 0 });
  const raf = React.useRef<number>(0);
  const latest = React.useRef({ x: 0, y: 0 });

  React.useEffect(() => {
    const onMove = (e: PointerEvent) => {
      latest.current = { x: e.clientX, y: e.clientY };
      if (raf.current) return;
      raf.current = requestAnimationFrame(() => {
        raf.current = 0;
        setPos(latest.current);
      });
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[80]">
      <div
        className="absolute"
        style={{
          left: pos.x,
          top: pos.y,
          transform: "translate(-50%,-50%)",
        }}
      >
        <div
          style={{
            width: size,
            height: 1,
            background: color,
          }}
        />
        <div
          style={{
            width: 1,
            height: size,
            background: color,
            position: "absolute",
            left: "50%",
            top: -size / 2,
            transform: "translateX(-50%)",
          }}
        />
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: 999,
            border: \`1px solid \${color}\`,
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
          }}
        />
      </div>
    </div>
  );
}
`;
