"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Scissors, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageCropProps {
  src: string;
  className?: string;
}

const ImageCrop: React.FC<ImageCropProps> = ({ src, className }) => {
  const [crop, setCrop] = useState({ x: 20, y: 20, width: 60, height: 60 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDrag = (_: any, info: any) => {
    // Simple logic for crop movement would go here
  };

  return (
    <div className={cn("flex flex-col items-center gap-6 p-6", className)}>
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-4">
        <div
          ref={containerRef}
          className="relative h-[400px] w-full max-w-[600px] overflow-hidden rounded-lg bg-[#111]"
        >
          <img
            src={src}
            alt="To crop"
            className="h-full w-full object-cover opacity-40 grayscale-[0.5]"
          />

          <motion.div
            className="absolute z-10 cursor-move border-2 border-white shadow-[0_0_0_9999px_rgba(0,0,0,0.6)]"
            style={{
              left: `${crop.x}%`,
              top: `${crop.y}%`,
              width: `${crop.width}%`,
              height: `${crop.height}%`,
            }}
            drag
            dragConstraints={containerRef}
            onDrag={handleDrag}
          >
            <div className="absolute -left-1.5 -top-1.5 h-3 w-3 bg-white" />
            <div className="absolute -right-1.5 -top-1.5 h-3 w-3 bg-white" />
            <div className="absolute -left-1.5 -bottom-1.5 h-3 w-3 bg-white" />
            <div className="absolute -right-1.5 -bottom-1.5 h-3 w-3 bg-white" />

            <img
              src={src}
              alt="Crop preview"
              className="absolute pointer-events-none object-cover"
              style={{
                width: `${100 * (100 / crop.width)}%`,
                height: `${100 * (100 / crop.height)}%`,
                left: `-${crop.x * (100 / crop.width)}%`,
                top: `-${crop.y * (100 / crop.height)}%`,
              }}
            />
          </motion.div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-bold text-black transition-transform hover:scale-105 active:scale-95">
          <Scissors className="h-4 w-4" />
          Crop Image
        </button>
        <button className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-white transition-colors hover:bg-white/10">
          <RotateCcw className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default ImageCrop;
