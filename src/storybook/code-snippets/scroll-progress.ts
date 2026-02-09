export const code = `"use client";

import { motion, MotionProps, useScroll } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

interface ScrollProgressProps extends Omit<
  React.HTMLAttributes<HTMLElement>,
  keyof MotionProps
> {
  ref?: React.Ref<HTMLDivElement>;
}

export function ScrollProgress({
  className,
  ref,
  ...props
}: ScrollProgressProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLElement>(null);
  const [isContainerSet, setIsContainerSet] = useState(false);

  useEffect(() => {
    if (elementRef.current) {
      const parent = getScrollParent(elementRef.current);
      if (parent) {
        containerRef.current = parent;
        setIsContainerSet(true);
      }
    }
  }, []);

  const { scrollYProgress } = useScroll({
    container: isContainerSet ? containerRef : undefined,
  });

  return (
    <motion.div
      ref={(node) => {
        elementRef.current = node;
        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
        }
      }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-px origin-left bg-gradient-to-r from-[#A97CF8] via-[#F38CB8] to-[#FDCC92]",
        className,
      )}
      style={{
        scaleX: scrollYProgress,
      }}
      {...props}
    />
  );
}

function getScrollParent(element: HTMLElement | null): HTMLElement | undefined {
  if (!element) {
    return undefined;
  }

  let parent = element.parentElement;
  while (parent) {
    const { overflowY } = window.getComputedStyle(parent);
    if (overflowY === "scroll" || overflowY === "auto") {
      return parent;
    }
    parent = parent.parentElement;
  }
  return undefined;
}
`;
