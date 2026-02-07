"use client";

import * as React from "react";
import { motion, type MotionProps, useScroll } from "motion/react";

import { cn } from "@/lib/utils";

export interface ScrollProgressProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  keyof MotionProps
> {}

const ScrollProgress = React.forwardRef<HTMLDivElement, ScrollProgressProps>(
  ({ className, ...props }, forwardedRef) => {
    const { scrollYProgress } = useScroll();

    return (
      <motion.div
        ref={forwardedRef}
        className={cn(
          "fixed inset-x-0 top-0 z-50 h-px origin-left bg-gradient-to-r from-[#A97CF8] via-[#F38CB8] to-[#FDCC92]",
          className,
        )}
        style={{ scaleX: scrollYProgress }}
        {...props}
      />
    );
  },
);

ScrollProgress.displayName = "ScrollProgress";

export default ScrollProgress;
