"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface KbdProps {
  keys: string[];
  className?: string;
  size?: "sm" | "md";
}

const Kbd: React.FC<KbdProps> = ({ keys, className, size = "md" }) => {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-12 p-8",
        className,
      )}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-1.5">
          {keys.map((key, i) => (
            <React.Fragment key={i}>
              <kbd
                className={cn(
                  "flex items-center justify-center rounded-lg border border-white/10 bg-white/5 font-mono font-black text-white shadow-lg transition-transform hover:scale-105",
                  size === "sm"
                    ? "h-6 min-w-[24px] px-1 text-[10px]"
                    : "h-9 min-w-[36px] px-2 text-sm",
                )}
              >
                {key}
              </kbd>
              {i < keys.length - 1 && (
                <span className="text-white/20 font-bold">+</span>
              )}
            </React.Fragment>
          ))}
        </div>
        <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">
          Premium KBD
        </span>
      </div>

      {/* Variation: Dark Glass */}
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-1">
          <kbd className="flex h-10 min-w-[40px] items-center justify-center rounded-xl bg-black px-2 font-mono text-sm font-black text-white outline outline-1 outline-white/10 shadow-2xl">
            ⌘
          </kbd>
          <kbd className="flex h-10 min-w-[40px] items-center justify-center rounded-xl bg-black px-2 font-mono text-sm font-black text-white outline outline-1 outline-white/10 shadow-2xl">
            K
          </kbd>
        </div>
        <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">
          Carbon Onyx
        </span>
      </div>
    </div>
  );
};

export default Kbd;
