"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const Glimpse: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 20 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top } = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-[400px] w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-[#060606] p-8 group"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Glimpse Spotlight */}
      <motion.div
        style={{
          left: smoothX,
          top: smoothY,
          transform: "translate(-50%, -50%)",
        }}
        className="pointer-events-none absolute h-[300px] w-[300px] rounded-full bg-white/[0.08] blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />

      <div className="relative z-10 flex h-full flex-col justify-center">
        <h2 className="text-5xl font-black italic tracking-tighter text-white/20 transition-colors group-hover:text-white/60 duration-700">
          GLIMPSE
        </h2>
        <p className="mt-4 max-w-md text-lg font-medium text-white/10 transition-colors group-hover:text-white/40 duration-700">
          A subtle spotlight effect that reveals content depth as you interact
          with the interface. Perfect for hero sections and feature highlights.
        </p>

        <div className="mt-10 flex gap-4">
          <div className="h-1 w-20 rounded-full bg-white/5 group-hover:bg-white/20 transition-colors duration-700" />
          <div className="h-1 w-10 border border-white/10 rounded-full group-hover:border-white/30 transition-colors duration-700" />
        </div>
      </div>

      {/* Masked Content (Revealed by spotlight) */}
      <motion.div
        style={{
          WebkitMaskImage: useTransform(
            [smoothX, smoothY],
            ([x, y]) =>
              `radial-gradient(200px circle at ${x}px ${y}px, black, transparent)`,
          ),
          maskImage: useTransform(
            [smoothX, smoothY],
            ([x, y]) =>
              `radial-gradient(200px circle at ${x}px ${y}px, black, transparent)`,
          ),
        }}
        className="absolute inset-0 z-20 p-8 flex flex-col justify-center pointer-events-none"
      >
        <h2 className="text-5xl font-black italic tracking-tighter text-white">
          GLIMPSE
        </h2>
        <p className="mt-4 max-w-md text-lg font-medium text-white/80">
          A subtle spotlight effect that reveals content depth as you interact
          with the interface. Perfect for hero sections and feature highlights.
        </p>
      </motion.div>
    </div>
  );
};

export default Glimpse;
