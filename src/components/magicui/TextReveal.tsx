"use client";

import {
  ComponentPropsWithoutRef,
  FC,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { motion, MotionValue, useScroll, useTransform } from "motion/react";

import { cn } from "@/lib/utils";

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: string;
}

export const TextReveal: FC<TextRevealProps> = ({ children, className }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLElement | null>(null);
  const [isContainerSet, setIsContainerSet] = useState(false);

  useEffect(() => {
    if (targetRef.current) {
      const parent = getScrollParent(targetRef.current);
      if (parent) {
        containerRef.current = parent;
        setIsContainerSet(true);
      }
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    container: isContainerSet ? containerRef : undefined,
    offset: ["start start", "end start"],
  });

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string");
  }

  const words = children.split(" ");

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[200vh]", className)}>
      <div
        className={
          "sticky top-0 mx-auto flex h-[50%] max-w-4xl items-center bg-transparent px-[1rem] py-[5rem]"
        }
      >
        <span
          className={
            "flex flex-wrap p-5 text-2xl font-bold text-foreground/20 md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl"
          }
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </span>
      </div>
    </div>
  );
};

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

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-1.5">
      <span className="absolute opacity-30">{children}</span>
      <motion.span style={{ opacity: opacity }} className={"text-foreground"}>
        {children}
      </motion.span>
    </span>
  );
};
