"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BeamCollisionProps {
  children?: React.ReactNode;
  className?: string;
}

const BeamCollision: React.FC<BeamCollisionProps> = ({
  children,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [beams, setBeams] = useState<
    { id: number; x: number; delay: number; duration: number }[]
  >([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBeams((prev) => [
        ...prev.slice(-10),
        {
          id: Date.now(),
          x: Math.random() * 100,
          delay: Math.random() * 2,
          duration: 3 + Math.random() * 2,
        },
      ]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative min-h-[500px] w-full overflow-hidden bg-[#060606] flex flex-col items-center justify-center p-8",
        className,
      )}
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(36,99,235,0.05),transparent_70%)]" />

      {/* Animated Beams */}
      <div className="absolute inset-0 pointer-events-none">
        {beams.map((beam) => (
          <motion.div
            key={beam.id}
            initial={{ y: -100, x: `${beam.x}%`, opacity: 0 }}
            animate={{
              y: ["0%", "100%"],
              opacity: [0, 1, 0],
              scaleY: [1, 2, 1],
            }}
            transition={{
              duration: beam.duration,
              delay: beam.delay,
              ease: "linear",
            }}
            className="absolute top-0 w-[2px] h-[300px] bg-gradient-to-b from-transparent via-blue-500 to-transparent blur-[1px]"
          >
            {/* Collision Glow */}
            <motion.div
              animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
              transition={{
                duration: 1,
                delay: beam.delay + beam.duration - 0.5,
              }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 h-20 w-20 rounded-full bg-blue-500/20 blur-xl"
            />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        {children || (
          <>
            <h2 className="text-6xl font-black italic tracking-tighter text-white md:text-8xl">
              COLLISION
            </h2>
            <p className="mt-6 max-w-xl text-lg font-medium text-white/40 uppercase tracking-[0.3em]">
              High intensity particle beams with dynamic collision effects.
            </p>
            <div className="mt-12 flex gap-4">
              <button className="rounded-full bg-white px-8 py-3 text-sm font-black text-black shadow-2xl transition-transform hover:scale-105 active:scale-95">
                Initialize Flux
              </button>
              <button className="rounded-full border border-white/10 bg-white/5 px-8 py-3 text-sm font-black text-white transition-colors hover:bg-white/10">
                Data Stream
              </button>
            </div>
          </>
        )}
      </div>

      {/* Grid Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
    </div>
  );
};

export default BeamCollision;
