"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export interface FlipCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
  className?: string;
}

export default function FlipCard({ front, back, className }: FlipCardProps) {
  return (
    <div
      className={cn(
        "group relative h-56 w-full max-w-[420px] [perspective:1000px]",
        className,
      )}
    >
      <div className="relative size-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 rounded-2xl border border-[var(--sb-border-2)] bg-[var(--sb-card)] p-6 [backface-visibility:hidden]">
          {front}
        </div>
        <div className="absolute inset-0 rounded-2xl border border-[var(--sb-border-2)] bg-[var(--sb-card)] p-6 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          {back}
        </div>
      </div>
    </div>
  );
}
