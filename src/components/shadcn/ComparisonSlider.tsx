"use client";

import React, { useState, useRef } from "react";
import { MoveHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

interface ComparisonSliderProps {
  beforeImg: string;
  afterImg: string;
  className?: string;
}

const ComparisonSlider: React.FC<ComparisonSliderProps> = ({
  beforeImg,
  afterImg,
  className,
}) => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x =
      "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const relativeX = x - rect.left;
    const percentage = Math.max(
      0,
      Math.min(100, (relativeX / rect.width) * 100),
    );
    setPosition(percentage);
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "group relative h-[400px] w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 select-none touch-none bg-black",
        className,
      )}
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {/* After Image (Background) */}
      <img
        src={afterImg}
        alt="After"
        className="absolute inset-0 h-full w-full object-cover pointer-events-none"
      />

      {/* Before Image (Foreground with Clip) */}
      <div
        className="absolute inset-0 h-full w-full overflow-hidden pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img
          src={beforeImg}
          alt="Before"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute left-6 top-6 rounded-lg bg-black/40 px-3 py-1.5 text-[10px] font-black tracking-widest text-white backdrop-blur-md uppercase">
          Before
        </div>
      </div>

      <div className="absolute right-6 top-6 rounded-lg bg-black/40 px-3 py-1.5 text-[10px] font-black tracking-widest text-white backdrop-blur-md uppercase">
        After
      </div>

      {/* Slider Handle */}
      <div
        className="absolute inset-y-0 z-20 w-1 cursor-ew-resize bg-white shadow-[0_0_20px_rgba(255,255,255,0.5)]"
        style={{ left: `${position}%` }}
      >
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-2xl transition-transform group-hover:scale-110">
          <MoveHorizontal className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
};

export default ComparisonSlider;
