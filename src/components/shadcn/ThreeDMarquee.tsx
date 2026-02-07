"use client";

import React from "react";
import { motion } from "framer-motion";

const items = [
  "NEXT.JS",
  "REACT",
  "TAILWIND",
  "FRAMER",
  "SHADCN",
  "TYPESCRIPT",
  "PRISMA",
  "VELOCITY",
];

const ThreeDMarquee: React.FC = () => {
  return (
    <div className="relative flex w-full items-center justify-center overflow-hidden py-20">
      <div
        className="flex w-full overflow-hidden"
        style={{ perspective: "1000px" }}
      >
        <motion.div
          animate={{
            rotateY: [-20, 20, -20],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative flex w-full justify-center gap-8 py-10"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* First loop */}
          <div className="flex shrink-0 gap-8 animate-marquee">
            {items.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-center rounded-2xl border border-white/5 bg-white/[0.03] px-10 py-6 text-4xl font-black italic tracking-tighter text-white shadow-2xl backdrop-blur-xl transition-all hover:bg-white/[0.08]"
                style={{ transform: "translateZ(50px)" }}
              >
                {item}
              </div>
            ))}
          </div>
          {/* Second loop */}
          <div
            className="flex shrink-0 gap-8 animate-marquee"
            aria-hidden="true"
          >
            {items.map((item, i) => (
              <div
                key={`second-${i}`}
                className="flex items-center justify-center rounded-2xl border border-white/5 bg-white/[0.03] px-10 py-6 text-4xl font-black italic tracking-tighter text-white shadow-2xl backdrop-blur-xl transition-all hover:bg-white/[0.08]"
                style={{ transform: "translateZ(50px)" }}
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Fade Edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[var(--sb-bg)] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[var(--sb-bg)] to-transparent z-10" />
    </div>
  );
};

export default ThreeDMarquee;
