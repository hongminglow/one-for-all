"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: React.ReactNode[];
  direction?: "left" | "right";
  speed?: number;
  pauseOnHover?: boolean;
  className?: string;
}

const Marquee: React.FC<MarqueeProps> = ({
  items,
  direction = "left",
  speed = 40,
  pauseOnHover = true,
  className,
}) => {
  return (
    <div className={cn("relative flex w-full overflow-hidden py-4", className)}>
      <div
        className={cn(
          "flex min-w-full shrink-0 gap-8 py-4",
          direction === "left" ? "animate-marquee" : "animate-marquee-reverse",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
        style={{ "--duration": `${speed}s` } as React.CSSProperties}
      >
        {items.map((item, i) => (
          <div key={i} className="flex shrink-0 items-center justify-center">
            {item}
          </div>
        ))}
        {/* Repeat for seamless loop */}
        {items.map((item, i) => (
          <div
            key={`dup-${i}`}
            className="flex shrink-0 items-center justify-center"
          >
            {item}
          </div>
        ))}
      </div>

      {/* Fade Gradients */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[var(--sb-bg)] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[var(--sb-bg)] to-transparent z-10" />
    </div>
  );
};

export default Marquee;
