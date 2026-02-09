export const code = `"use client";

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
      className={cn(
        "relative inline-block h-[1.2em] overflow-hidden align-top",
        className,
      )}
    >
      <span className="invisible opacity-0" aria-hidden="true">
        {words.reduce((a, b) => (a.length > b.length ? a : b), "")}
      </span>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index] ?? index}
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -16, opacity: 0 }}
          transition={{ duration }}
          className="absolute left-0 top-0 block w-full text-center"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
`;
