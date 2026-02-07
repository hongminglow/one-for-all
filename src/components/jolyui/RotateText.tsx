"use client";

import * as React from "react";
import { AnimatePresence, motion } from "motion/react";

import { cn } from "@/lib/cn";

export interface RotateTextProps {
  words: string[];
  className?: string;
  duration?: number;
  pauseDuration?: number;
}

export default function RotateText({
  words,
  className,
  duration = 0.5,
  pauseDuration = 2,
}: RotateTextProps) {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    if (words.length <= 1) return;
    const interval = window.setInterval(
      () => {
        setIndex((prev) => (prev + 1) % words.length);
      },
      (duration + pauseDuration) * 1000,
    );
    return () => window.clearInterval(interval);
  }, [words, duration, pauseDuration]);

  return (
    <div
      ref={undefined}
      className={cn("relative h-[1.2em] overflow-hidden", className)}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index] ?? index}
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -16, opacity: 0 }}
          transition={{ duration }}
          className="absolute block"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
