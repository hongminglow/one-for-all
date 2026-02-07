"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Avatar {
  src: string;
  alt: string;
  name: string;
}

interface AvatarGroupProps {
  avatars: Avatar[];
  max?: number;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const AvatarGroup: React.FC<AvatarGroupProps> = ({
  avatars,
  max = 4,
  className,
  size = "md",
}) => {
  const displayAvatars = avatars.slice(0, max);
  const remainingCount = avatars.length - max;

  const sizeClasses = {
    sm: "h-8 w-8 text-xs",
    md: "h-12 w-12 text-sm",
    lg: "h-16 w-16 text-base",
  };

  return (
    <div
      className={cn("flex flex-row items-center justify-center p-4", className)}
    >
      <div className="flex -space-x-4 rtl:space-x-reverse">
        {displayAvatars.map((avatar, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1, zIndex: 20, y: -5 }}
            className={cn(
              "relative flex items-center justify-center rounded-full border-2 border-[var(--sb-bg)] bg-white/10 ring-2 ring-white/5 transition-transform",
              sizeClasses[size],
            )}
            title={avatar.name}
          >
            <img
              src={avatar.src}
              alt={avatar.alt}
              className="h-full w-full rounded-full object-cover"
            />

            {/* Tooltip on hover */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 rounded-md bg-black px-2 py-1 text-[10px] font-bold text-white opacity-0 transition-opacity group-hover:opacity-100 whitespace-nowrap pointer-events-none">
              {avatar.name}
            </div>
          </motion.div>
        ))}

        {remainingCount > 0 && (
          <div
            className={cn(
              "flex items-center justify-center rounded-full border-2 border-[var(--sb-bg)] bg-white/[0.05] font-black text-white/40 ring-2 ring-white/5 transition-colors hover:bg-white/10",
              sizeClasses[size],
            )}
          >
            +{remainingCount}
          </div>
        )}
      </div>
    </div>
  );
};

export default AvatarGroup;
