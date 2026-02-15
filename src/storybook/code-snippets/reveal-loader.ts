export const code = `"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface RevealLoaderProps {
  text?: string;
  className?: string;
  revealColor?: string;
}

export const RevealLoader = ({
  text = "LOADING",
  className,
  revealColor = "#ffffff",
}: RevealLoaderProps) => {
  const characters = text.split("");

  return (
    <div className={cn("flex items-center justify-center gap-1", className)}>
      {characters.map((char, i) => (
        <div key={i} className="relative overflow-hidden">
          <motion.span
            className="block text-4xl font-black text-neutral-800"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.5,
              delay: i * 0.1,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "circInOut",
            }}
          >
            {char}
          </motion.span>
          <motion.div
            className="absolute inset-0 bg-white"
            style={{ backgroundColor: revealColor }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: [0, 1, 0] }}
            transition={{
              duration: 1,
              delay: i * 0.1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default RevealLoader;
`;
