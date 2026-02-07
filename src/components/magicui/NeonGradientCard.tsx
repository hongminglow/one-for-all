"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

import "./NeonGradientCard.css";

export interface NeonColors {
  firstColor: string;
  secondColor: string;
}

export interface NeonGradientCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  borderSize?: number;
  borderRadius?: number;
  neonColors?: NeonColors;
}

export default function NeonGradientCard({
  className,
  children,
  borderSize = 2,
  borderRadius = 20,
  neonColors = { firstColor: "#ff00aa", secondColor: "#00FFF1" },
  ...props
}: NeonGradientCardProps) {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const [blur, setBlur] = React.useState(24);

  React.useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const ro = new ResizeObserver(() => {
      const w = node.offsetWidth || 0;
      setBlur(Math.max(12, Math.floor(w / 3)));
    });

    ro.observe(node);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative z-10 size-full rounded-[var(--border-radius)]",
        className,
      )}
      style={
        {
          "--border-size": `${borderSize}px`,
          "--border-radius": `${borderRadius}px`,
          "--card-content-radius": `${Math.max(borderRadius - borderSize, 0)}px`,
          "--neon-first-color": neonColors.firstColor,
          "--neon-second-color": neonColors.secondColor,
        } as React.CSSProperties
      }
      {...props}
    >
      <div
        className={cn(
          "relative size-full min-h-[inherit] overflow-hidden rounded-[var(--card-content-radius)] bg-gray-100 p-6 dark:bg-neutral-900",
          "break-words",
        )}
      >
        <div
          aria-hidden
          className="magicui-neon-gradient-spin pointer-events-none absolute inset-0 -z-20 rounded-[var(--border-radius)]"
          style={{
            backgroundImage:
              "linear-gradient(0deg, var(--neon-first-color), var(--neon-second-color))",
            transform: "scale(1.06)",
          }}
        />
        <div
          aria-hidden
          className="magicui-neon-gradient-spin pointer-events-none absolute inset-0 -z-30 rounded-[var(--border-radius)] opacity-80"
          style={{
            backgroundImage:
              "linear-gradient(0deg, var(--neon-first-color), var(--neon-second-color))",
            filter: `blur(${blur}px)`,
            transform: "scale(1.06)",
          }}
        />

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 rounded-[var(--card-content-radius)]"
          style={{
            boxShadow: "inset 0 0 0 var(--border-size) rgba(255,255,255,0.4)",
          }}
        />

        {children}
      </div>
    </div>
  );
}
