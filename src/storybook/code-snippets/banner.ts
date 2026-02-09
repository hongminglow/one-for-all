export const code = `"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BannerProps {
  title: string;
  description?: string;
  cta?: string;
  onDismiss?: () => void;
  className?: string;
}

const Banner: React.FC<BannerProps> = ({
  title,
  description,
  cta,
  onDismiss,
  className,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50, height: 0 }}
          className={cn(
            "relative w-full overflow-hidden bg-[#2463eb] py-3 px-6 md:px-12",
            className,
          )}
        >
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.4),transparent_50%),radial-gradient(circle_at_80%_50%,rgba(255,255,255,0.4),transparent_50%)]" />

          <div className="relative flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md">
                <Sparkles className="h-4 w-4" />
              </div>
              <div>
                <span className="font-bold text-white">{title}</span>
                {description && (
                  <span className="hidden md:inline ml-2 text-white/80 text-sm">
                    — {description}
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center gap-6">
              {cta && (
                <button className="hidden sm:flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-black text-[#2463eb] transition-all hover:bg-white/90 active:scale-95 shadow-lg shadow-black/10">
                  {cta}
                  <ArrowRight className="h-3 w-3" />
                </button>
              )}
              <button
                onClick={() => {
                  setIsVisible(false);
                  if (onDismiss) onDismiss();
                }}
                className="rounded-full p-1.5 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Banner;
`;
