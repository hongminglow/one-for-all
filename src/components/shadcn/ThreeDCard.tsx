"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface ThreeDCardProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

const ThreeDCard: React.FC<ThreeDCardProps> = ({
  children,
  className,
  containerClassName,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"],
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"],
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <div
      className={cn(
        "flex items-center justify-center p-12",
        containerClassName,
      )}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={cn(
          "relative h-96 w-72 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent shadow-2xl backdrop-blur-md transition-shadow duration-500",
          isHovered && "shadow-white/10",
          className,
        )}
      >
        <div
          style={{
            transform: "translateZ(75px)",
            transformStyle: "preserve-3d",
          }}
          className="absolute inset-4 flex flex-col justify-end rounded-2xl bg-black/40 p-6 text-white overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

          <div
            style={{ transform: "translateZ(50px)" }}
            className="relative z-10"
          >
            <h3 className="text-2xl font-black italic tracking-tighter">
              PREMIUM
            </h3>
            <p className="mt-2 text-sm font-medium text-white/60">
              Interactive 3D effect driven by mouse movement and Framer Motion.
            </p>
            <div className="mt-6 flex h-10 w-full items-center justify-center rounded-xl bg-white text-sm font-black text-black">
              Explore More
            </div>
          </div>
        </div>

        {/* Ambient Light Effect */}
        <motion.div
          style={{
            transform: "translateZ(20px)",
            opacity: isHovered ? 0.3 : 0,
          }}
          className="pointer-events-none absolute -inset-20 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2),transparent_70%)] blur-3xl transition-opacity duration-500"
        />
      </motion.div>
    </div>
  );
};

export default ThreeDCard;
