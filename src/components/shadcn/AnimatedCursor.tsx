"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const AnimatedCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { stiffness: 500, damping: 28 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.getAttribute("role") === "button"
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isVisible]);

  return (
    <div className="flex flex-col items-center justify-center p-20 gap-8">
      <div className="text-center">
        <h3 className="text-2xl font-black italic tracking-tighter text-white">
          INTERACTIVE CURSOR
        </h3>
        <p className="mt-2 text-sm text-white/40">
          Hover over the circles below to see the cursor react.
        </p>
      </div>

      <div className="flex gap-6">
        <button className="h-20 w-20 rounded-full border border-white/10 bg-white/5 transition-colors hover:bg-white/10" />
        <button className="h-20 w-20 rounded-full border border-white/10 bg-white/5 transition-colors hover:bg-white/10" />
        <button className="h-20 w-20 rounded-full border border-white/10 bg-white/5 transition-colors hover:bg-white/10" />
      </div>

      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] h-8 w-8 rounded-full border border-white mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          scale: isHovering ? 2.5 : 1,
          backgroundColor: isHovering
            ? "rgba(255,255,255,1)"
            : "rgba(255,255,255,0)",
        }}
        transition={{
          scale: { type: "spring", stiffness: 300, damping: 20 },
          backgroundColor: { duration: 0.2 },
        }}
      />

      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] h-1 w-1 rounded-full bg-white"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </div>
  );
};

export default AnimatedCursor;
