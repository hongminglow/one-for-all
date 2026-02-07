"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SpinnerProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  variant?: "pulse" | "spin" | "dots" | "bars";
}

const Spinner: React.FC<SpinnerProps> = ({
  size = "md",
  className,
  variant = "spin",
}) => {
  const sizeClasses = {
    sm: "h-5 w-5",
    md: "h-10 w-10",
    lg: "h-16 w-16",
    xl: "h-24 w-24",
  };

  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-12 p-8",
        className,
      )}
    >
      {/* Variant: Spin */}
      <div className="flex flex-col items-center gap-3">
        <div className={cn("relative", sizeClasses[size])}>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="h-full w-full rounded-full border-2 border-white/10 border-t-white"
          />
        </div>
        <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">
          Spin
        </span>
      </div>

      {/* Variant: Pulse */}
      <div className="flex flex-col items-center gap-3">
        <div
          className={cn(
            "relative flex items-center justify-center",
            sizeClasses[size],
          )}
        >
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full bg-blue-500"
          />
          <div className="relative h-2 w-2 rounded-full bg-blue-500" />
        </div>
        <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">
          Pulse
        </span>
      </div>

      {/* Variant: Dots */}
      <div className="flex flex-col items-center gap-3">
        <div className="flex items-center gap-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut",
              }}
              className="h-2 w-2 rounded-full bg-white transition-all shadow-[0_0_10px_rgba(255,255,255,0.5)]"
            />
          ))}
        </div>
        <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">
          Dots
        </span>
      </div>

      {/* Variant: Bars */}
      <div className="flex flex-col items-center gap-3">
        <div className="flex items-end gap-1 h-10 px-4">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              animate={{ height: ["20%", "100%", "20%"] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut",
              }}
              className="w-1.5 rounded-full bg-gradient-to-t from-blue-500 to-cyan-400"
            />
          ))}
        </div>
        <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">
          Bars
        </span>
      </div>
    </div>
  );
};

export default Spinner;
