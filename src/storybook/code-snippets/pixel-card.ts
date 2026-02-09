export const code = `"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export interface PixelCardProps {
  className?: string;
  children: React.ReactNode;
}

export default function PixelCard({ className, children }: PixelCardProps) {
  return (
    <div
      className={cn(
        "group relative w-full max-w-[620px] overflow-hidden rounded-2xl border border-[var(--sb-border-2)] bg-[var(--sb-card)] p-6",
        className,
      )}
    >
      <div className="relative z-10">{children}</div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "10px 10px",
          animation: "tsdefault-pixel 900ms linear infinite",
        }}
      />
      <style jsx>{\`
        @keyframes tsdefault-pixel {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-10px, -10px, 0);
          }
        }
      \`}</style>
    </div>
  );
}
`;
