"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";

import { cn } from "@/lib/utils";

export interface RadialMenuItem {
  label: string;
  onSelect?: () => void;
}

export interface RadialMenuProps {
  items: RadialMenuItem[];
  radius?: number;
  className?: string;
}

export default function RadialMenu({
  items,
  radius = 90,
  className,
}: RadialMenuProps) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className={cn("relative h-64 w-64", className)}>
      <button
        type="button"
        className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-[var(--sb-border-2)] bg-[var(--sb-selected)] px-4 py-2 text-[12px] font-black text-[var(--sb-text-strong)]"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? "Close" : "Menu"}
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {items.map((item, idx) => {
              const angle = (idx / items.length) * Math.PI * 2 - Math.PI / 2;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              return (
                <motion.button
                  key={item.label}
                  type="button"
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl border border-[var(--sb-border-2)] bg-[var(--sb-card)] px-3 py-2 text-[12px] font-black text-[var(--sb-text-strong)]"
                  initial={{ x: 0, y: 0, scale: 0.7, opacity: 0 }}
                  animate={{ x, y, scale: 1, opacity: 1 }}
                  exit={{ x: 0, y: 0, scale: 0.7, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 380, damping: 26 }}
                  onClick={() => {
                    item.onSelect?.();
                    setOpen(false);
                  }}
                >
                  {item.label}
                </motion.button>
              );
            })}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
