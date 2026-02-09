export const code = `"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, Heart, Flame, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

interface RatingProps {
  count?: number;
  initialValue?: number;
  icon?: "star" | "heart" | "flame" | "sun";
  activeColor?: string;
  size?: number;
  onChange?: (value: number) => void;
}

const Rating: React.FC<RatingProps> = ({
  count = 5,
  initialValue = 0,
  icon = "star",
  activeColor = "#facc15",
  size = 24,
  onChange,
}) => {
  const [rating, setRating] = useState(initialValue);
  const [hover, setHover] = useState(0);

  const getIcon = () => {
    switch (icon) {
      case "heart":
        return Heart;
      case "flame":
        return Flame;
      case "sun":
        return Sun;
      default:
        return Star;
    }
  };

  const IconComponent = getIcon();

  return (
    <div className="flex items-center gap-1.5 p-4 rounded-xl bg-white/5 border border-white/10 w-fit">
      {[...Array(count)].map((_, i) => {
        const value = i + 1;
        const isActive = value <= (hover || rating);

        return (
          <motion.button
            key={i}
            whileHover={{ scale: 1.25, rotate: 15 }}
            whileTap={{ scale: 0.8 }}
            onClick={() => {
              setRating(value);
              onChange?.(value);
            }}
            onMouseEnter={() => setHover(value)}
            onMouseLeave={() => setHover(0)}
            className="relative outline-none transition-colors"
          >
            <IconComponent
              size={size}
              className={cn(
                "transition-all duration-300",
                isActive
                  ? "fill-current"
                  : "fill-transparent text-[var(--sb-text-muted)]",
              )}
              style={{ color: isActive ? activeColor : undefined }}
            />
            {isActive && (
              <motion.div
                layoutId="sparkle"
                className="absolute inset-0 rounded-full blur-[4px]"
                style={{ backgroundColor: activeColor, opacity: 0.2 }}
              />
            )}
          </motion.button>
        );
      })}
      <span className="ml-4 text-sm font-black text-[var(--sb-text-strong)] tabular-nums">
        {hover || rating || "0"}.0
      </span>
    </div>
  );
};

export default Rating;
`;
