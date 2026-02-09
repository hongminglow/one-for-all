export const code = `"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StatusIndicatorProps {
  status: "online" | "offline" | "away" | "busy" | "maintenance";
  label?: string;
  showLabel?: boolean;
  className?: string;
}

const statusConfig = {
  online: {
    color: "bg-emerald-500",
    glow: "shadow-emerald-500/50",
    text: "Online",
  },
  offline: {
    color: "bg-zinc-500",
    glow: "shadow-zinc-500/50",
    text: "Offline",
  },
  away: { color: "bg-amber-500", glow: "shadow-amber-500/50", text: "Away" },
  busy: { color: "bg-rose-500", glow: "shadow-rose-500/50", text: "Busy" },
  maintenance: {
    color: "bg-blue-500",
    glow: "shadow-blue-500/50",
    text: "Maintenance",
  },
};

const StatusIndicator: React.FC<StatusIndicatorProps> = ({
  status,
  label,
  showLabel = true,
  className,
}) => {
  const config = statusConfig[status];

  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-full border border-white/5 bg-white/[0.03] px-3 py-1.5 backdrop-blur-md",
        className,
      )}
    >
      <div className="relative flex h-2.5 w-2.5">
        <motion.span
          animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className={cn(
            "absolute inline-flex h-full w-full rounded-full opacity-75",
            config.color,
          )}
        />
        <span
          className={cn(
            "relative inline-flex h-2.5 w-2.5 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.5)]",
            config.color,
            "shadow-sm",
            config.glow,
          )}
        />
      </div>

      {showLabel && (
        <span className="text-[10px] font-black uppercase tracking-widest text-white/70">
          {label || config.text}
        </span>
      )}
    </div>
  );
};

export default StatusIndicator;
`;
