"use client";

import * as React from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/cn";

export interface RainbowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  colors?: string[];
  duration?: number;
  borderWidth?: number;
  animated?: boolean;
}

const DEFAULT_COLORS = ["#f43f5e", "#8b5cf6", "#3b82f6", "#22c55e", "#f43f5e"];

const RainbowButton = React.forwardRef<HTMLButtonElement, RainbowButtonProps>(
  (
    {
      children,
      colors = DEFAULT_COLORS,
      duration = 2,
      borderWidth = 2,
      animated = true,
      className,
      type = "button",
      ...props
    },
    ref,
  ) => {
    const gradientColors = colors.join(", ");

    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          "relative inline-flex items-center justify-center overflow-hidden rounded-xl font-semibold transition-transform active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50",
          className,
        )}
        style={{ padding: borderWidth }}
        {...props}
      >
        <motion.div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background: `conic-gradient(from 0deg, ${gradientColors})`,
          }}
          animate={animated ? { rotate: 360 } : undefined}
          transition={
            animated
              ? {
                  duration,
                  repeat: Infinity,
                  ease: "linear",
                }
              : undefined
          }
        />
        <span
          className="relative z-10 flex items-center gap-2 rounded-[10px] bg-[var(--sb-bg)] px-5 py-2.5 text-[13px] font-black text-[var(--sb-text-strong)]"
          style={{ borderRadius: `calc(0.75rem - ${borderWidth}px)` }}
        >
          {children}
        </span>
      </button>
    );
  },
);

RainbowButton.displayName = "RainbowButton";

export default RainbowButton;
