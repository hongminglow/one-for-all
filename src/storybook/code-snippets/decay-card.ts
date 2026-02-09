export const code = `"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export interface DecayCardProps {
  className?: string;
  children: React.ReactNode;
}

export default function DecayCard({ className, children }: DecayCardProps) {
  return (
    <div
      className={cn(
        "relative w-full max-w-[620px] overflow-hidden rounded-2xl border border-[var(--sb-border-2)] bg-[var(--sb-card)] p-6",
        className,
      )}
    >
      <svg width="0" height="0" aria-hidden focusable="false">
        <filter id="decay-filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.01"
            numOctaves="2"
            result="noise"
          >
            <animate
              attributeName="baseFrequency"
              dur="6s"
              values="0.008;0.014;0.008"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" />
        </filter>
      </svg>
      <div style={{ filter: "url(#decay-filter)" }}>{children}</div>
    </div>
  );
}
`;
