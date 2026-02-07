"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export const Lens = ({
  children,
  zoomFactor = 1.3,
  lensSize = 100,
}: {
  children: React.ReactNode;
  zoomFactor?: number;
  lensSize?: number;
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top } = containerRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    setPosition({ x, y });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden rounded-xl border border-[var(--sb-border)] cursor-zoom-in"
    >
      {children}
      <motion.div
        animate={{ opacity }}
        transition={{ duration: 0.15 }}
        style={{
          left: position.x - lensSize / 2,
          top: position.y - lensSize / 2,
          width: lensSize,
          height: lensSize,
        }}
        className="pointer-events-none absolute z-50 rounded-full border border-white/20 bg-white/10 shadow-xl backdrop-blur-[2px] backdrop-brightness-125"
      >
        <div
          className="absolute inset-0 rounded-full"
          style={{
            transform: `scale(${zoomFactor}) translate(${(position.x - lensSize) * -0.1}px, ${(position.y - lensSize) * -0.1}px)`,
            transformOrigin: "center center",
          }}
        />
      </motion.div>
    </div>
  );
};
