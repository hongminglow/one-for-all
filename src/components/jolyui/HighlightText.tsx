"use client";

import * as React from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/cn";

export interface HighlightTextProps {
  children: string;
  className?: string;
  highlightClassName?: string;
  duration?: number;
  delay?: number;
}

const HighlightText = React.forwardRef<HTMLSpanElement, HighlightTextProps>(
  (
    { children, className, highlightClassName, duration = 0.5, delay = 0.2 },
    ref,
  ) => {
    return (
      <span ref={ref} className={cn("relative inline-block", className)}>
        <motion.span
          aria-hidden="true"
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration, delay, ease: "easeInOut" }}
          className={cn(
            "absolute inset-0 -z-10 h-full w-full rounded-sm opacity-30",
            highlightClassName,
          )}
          style={{
            backgroundColor: "var(--highlight-color, #facc15)",
          }}
        />
        {children}
      </span>
    );
  },
);

HighlightText.displayName = "HighlightText";

export default HighlightText;
