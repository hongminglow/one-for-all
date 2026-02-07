"use client";

import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

const people = [
  {
    id: 1,
    name: "Robert Fox",
    design: "Designer",
    image: "https://i.pravatar.cc/150?u=a",
  },
  {
    id: 2,
    name: "Jane Cooper",
    design: "Developer",
    image: "https://i.pravatar.cc/150?u=b",
  },
  {
    id: 3,
    name: "Cody Fisher",
    design: "Manager",
    image: "https://i.pravatar.cc/150?u=c",
  },
  {
    id: 4,
    name: "Darlene Robertson",
    design: "Marketing",
    image: "https://i.pravatar.cc/150?u=d",
  },
];

const AnimatedTooltip: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig,
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig,
  );

  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <div className="flex flex-row items-center justify-center py-10">
      {people.map((person, idx) => (
        <div
          className="relative group -mr-4"
          key={person.id}
          onMouseEnter={() => setHoveredIndex(person.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="wait">
            {hoveredIndex === person.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
              >
                <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
                <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
                <div className="font-bold text-white relative z-30 text-base">
                  {person.name}
                </div>
                <div className="text-white text-xs">{person.design}</div>
              </motion.div>
            )}
          </AnimatePresence>
          <div
            onMouseMove={handleMouseMove}
            className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white bg-white transition-all duration-500 hover:z-30 hover:scale-110 group-active:scale-95"
          >
            <img
              src={person.image}
              alt={person.name}
              className="h-full w-full rounded-full object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnimatedTooltip;
