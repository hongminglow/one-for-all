"use client";

import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";

interface DockIconProps {
  mouseX: MotionValue<number>;
  children: React.ReactNode;
  label: string;
}

const DockIcon = ({ mouseX, children, label }: DockIconProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="group relative flex aspect-square items-center justify-center rounded-full bg-white/10 text-white shadow-xl backdrop-blur-md transition-colors hover:bg-white/20"
    >
      <div className="flex h-1/2 w-1/2 items-center justify-center text-current">
        {children}
      </div>
      <span className="absolute -top-12 left-1/2 -translate-x-1/2 rounded-md bg-black/80 px-2 py-1 text-[10px] font-bold text-white opacity-0 transition-opacity group-hover:opacity-100">
        {label}
      </span>
    </motion.div>
  );
};

const MacOSDock: React.FC = () => {
  const mouseX = useMotionValue(Infinity);

  const icons = [
    { label: "Finder", icon: "📂" },
    { label: "Safari", icon: "🌐" },
    { label: "Messages", icon: "💬" },
    { label: "Mail", icon: "✉️" },
    { label: "Music", icon: "🎵" },
    { label: "Photos", icon: "🖼️" },
    { label: "Settings", icon: "⚙️" },
    { label: "Terminal", icon: "⌨️" },
    { label: "Trash", icon: "🗑️" },
  ];

  return (
    <div className="flex w-full items-end justify-center pb-8 pt-20">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="mx-auto flex h-16 items-end gap-3 rounded-2xl border border-white/20 bg-white/5 p-2 shadow-2xl backdrop-blur-xl"
      >
        {icons.map((item, i) => (
          <DockIcon key={i} mouseX={mouseX} label={item.label}>
            <span className="text-2xl">{item.icon}</span>
          </DockIcon>
        ))}
      </motion.div>
    </div>
  );
};

export default MacOSDock;
