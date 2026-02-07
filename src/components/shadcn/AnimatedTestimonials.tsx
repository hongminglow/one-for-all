"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alex Rivera",
    role: "Senior Designer",
    content:
      "The attention to detail in these components is simply breathtaking. It's rare to find such a perfect balance of aesthetics and functionality.",
    avatar: "https://i.pravatar.cc/150?u=1",
    color: "#6366f1",
  },
  {
    name: "Sarah Chen",
    role: "Engineering Lead",
    content:
      "Integration was a breeze. The code is clean, modular, and the animations are buttery smooth. Highly recommended for any modern app.",
    avatar: "https://i.pravatar.cc/150?u=2",
    color: "#ec4899",
  },
  {
    name: "James Wilson",
    role: "Startup Founder",
    content:
      "Our user engagement spiked after we implemented these interactive elements. They truly make the interface feel alive.",
    avatar: "https://i.pravatar.cc/150?u=3",
    color: "#10b981",
  },
];

const AnimatedTestimonials: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setIndex(
      (prev) =>
        (prev + newDirection + testimonials.length) % testimonials.length,
    );
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.5,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.5,
      rotateY: direction < 0 ? 45 : -45,
    }),
  };

  return (
    <div className="flex w-full items-center justify-center py-10">
      <div className="relative h-[440px] w-full max-w-4xl px-4 flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.3 },
              scale: { duration: 0.4 },
              rotateY: { duration: 0.5 },
            }}
            className="absolute rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-12 shadow-2xl backdrop-blur-xl flex flex-col items-center text-center"
            style={{ perspective: "1000px" }}
          >
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-white/5 text-white">
              <Quote className="h-8 w-8 opacity-40" />
            </div>

            <p className="mb-10 text-xl md:text-2xl font-medium leading-relaxed text-white">
              "{testimonials[index].content}"
            </p>

            <div className="flex flex-col items-center">
              <div
                className="mb-4 h-16 w-16 rounded-full border-2 p-1"
                style={{ borderColor: testimonials[index].color }}
              >
                <img
                  src={testimonials[index].avatar}
                  alt={testimonials[index].name}
                  className="h-full w-full rounded-full object-cover grayscale transition-all hover:grayscale-0"
                />
              </div>
              <h4 className="text-lg font-bold text-white">
                {testimonials[index].name}
              </h4>
              <p className="text-sm font-medium text-white/40 uppercase tracking-widest">
                {testimonials[index].role}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-x-0 bottom-0 flex justify-center gap-4 py-8 pointer-events-none">
          <button
            onClick={() => paginate(-1)}
            className="pointer-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all hover:bg-white/10 active:scale-95"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="pointer-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all hover:bg-white/10 active:scale-95"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnimatedTestimonials;
