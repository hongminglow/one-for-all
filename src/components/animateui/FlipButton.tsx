"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export interface FlipButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  frontText: string;
  backText?: string;
}

export default function FlipButton({
  frontText,
  backText = frontText,
  className,
  ...props
}: FlipButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        "group relative h-10 rounded-xl border border-[var(--sb-border-2)] bg-[var(--sb-selected)] px-4 text-[12px] font-black text-[var(--sb-text-strong)] [perspective:800px]",
        className,
      )}
      {...props}
    >
      <span className="absolute inset-0 grid place-items-center [transform-style:preserve-3d]">
        <span className="block transition-transform duration-300 [backface-visibility:hidden] group-hover:[transform:rotateX(180deg)]">
          {frontText}
        </span>
        <span className="absolute block [transform:rotateX(-180deg)] transition-transform duration-300 [backface-visibility:hidden] group-hover:[transform:rotateX(0deg)]">
          {backText}
        </span>
      </span>
    </button>
  );
}
