"use client";

import * as React from "react";
import { AnimatePresence, motion } from "motion/react";

import { cn } from "@/lib/cn";

export interface GooeyTextMorphingProps {
  texts: string[];
  className?: string;
  duration?: number;
  pauseDuration?: number;
}

export default function GooeyTextMorphing({
  texts,
  className,
  duration = 1.5,
  pauseDuration = 2,
}: GooeyTextMorphingProps) {
  const [index, setIndex] = React.useState(0);
  const uid = React.useId();
  const filterId = `goo-${uid}`;

  React.useEffect(() => {
    if (texts.length <= 1) return;
    const interval = window.setInterval(
      () => {
        setIndex((prev) => (prev + 1) % texts.length);
      },
      (duration + pauseDuration) * 1000,
    );
    return () => window.clearInterval(interval);
  }, [texts, duration, pauseDuration]);

  return (
    <div
      className={cn(
        "relative flex items-center justify-center",
        "[filter:blur(10px)_contrast(1.8)]",
        className,
      )}
      style={{ filter: `url(#${filterId}) blur(10px) contrast(1.8)` }}
    >
      <AnimatePresence mode="popLayout">
        <motion.span
          key={texts[index] ?? index}
          initial={{ opacity: 0, scale: 0.85, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 1.15, filter: "blur(10px)" }}
          transition={{ duration, ease: "easeInOut" }}
          className="absolute whitespace-nowrap text-[42px] font-black tracking-tight text-[var(--sb-text-strong)]"
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
      <svg className="hidden" aria-hidden="true">
        <defs>
          <filter id={filterId}>
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="14"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
