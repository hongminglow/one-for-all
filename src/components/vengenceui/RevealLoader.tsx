"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface RevealLoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  text?: string;
  revealColor?: string;
}

export const RevealLoader = ({
  text = "LOADING",
  revealColor = "white",
  className,
  ...props
}: RevealLoaderProps) => {
  return (
    <div
      className={cn("flex items-center justify-center gap-1", className)}
      {...props}
    >
      {text.split("").map((char, i) => (
        <div key={i} className="relative overflow-hidden">
          <motion.span
            className="text-5xl font-black text-neutral-800 dark:text-neutral-200"
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 0.1 }}
            transition={{
              duration: 1,
              delay: i * 0.1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            {char}
          </motion.span>
          <motion.span
            className="absolute inset-0 text-5xl font-black"
            style={{ color: revealColor }}
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={{ clipPath: "inset(0% 0 0 0)" }}
            transition={{
              duration: 1.5,
              delay: i * 0.15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {char}
          </motion.span>
        </div>
      ))}
    </div>
  );
};

RevealLoader.displayName = "RevealLoader";
export default RevealLoader;
