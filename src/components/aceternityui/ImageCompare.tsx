"use client";

import React, { useRef, useState } from "react";
import { useMotionValue } from "framer-motion";

export const ImageCompare = ({
  beforeImage,
  afterImage,
  className,
  slideMode = "hover",
}: {
  beforeImage: string;
  afterImage: string;
  className?: string;
  slideMode?: "hover" | "drag";
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const position = ((event.clientX - left) / width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const touch = event.touches[0];
    const position = ((touch.clientX - left) / width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-[400px] overflow-hidden rounded-xl border border-[var(--sb-border)] cursor-col-resize select-none ${className}`}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${afterImage})`,
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
        }}
      />
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${beforeImage})`,
          clipPath: `inset(0 0 0 ${sliderPosition}%)`,
        }}
      />
      <div
        className="absolute inset-y-0 w-1 bg-white shadow-xl flex items-center justify-center z-20 pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="h-6 w-6 rounded-full bg-white shadow-md flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 text-gray-500"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </div>
      </div>
    </div>
  );
};
