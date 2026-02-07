"use client";

import { motion } from "motion/react";

import { cn } from "@/lib/utils";

export interface RadialIntroProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function RadialIntro({
  title,
  subtitle,
  className,
}: RadialIntroProps) {
  return (
    <div
      className={cn(
        "relative w-full max-w-[760px] overflow-hidden rounded-2xl border border-[var(--sb-border-2)] bg-[var(--sb-card)] p-8",
        className,
      )}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-32 rounded-full"
        initial={{ opacity: 0.2, scale: 0.7 }}
        animate={{ opacity: 0.9, scale: 1.05 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(169,124,248,0.55), transparent 55%), radial-gradient(circle at 70% 60%, rgba(243,140,184,0.45), transparent 60%)",
          filter: "blur(10px)",
        }}
      />
      <div className="relative">
        <div className="text-[22px] font-black tracking-tight text-[var(--sb-text-strong)]">
          {title}
        </div>
        {subtitle ? (
          <div className="mt-2 max-w-[52ch] text-[13px] font-medium text-[var(--sb-text-muted)]">
            {subtitle}
          </div>
        ) : null}
      </div>
    </div>
  );
}
