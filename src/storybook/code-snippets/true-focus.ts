export const code = `"use client";

import * as React from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

export interface TrueFocusProps {
  text: string;
  intervalMs?: number;
  className?: string;
}

export default function TrueFocus({
  text,
  intervalMs = 1400,
  className,
}: TrueFocusProps) {
  const words = React.useMemo(() => text.split(" "), [text]);
  const [active, setActive] = React.useState(0);
  const refs = React.useRef<Array<HTMLSpanElement | null>>([]);
  const [rect, setRect] = React.useState<{
    x: number;
    y: number;
    w: number;
    h: number;
  } | null>(null);
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const id = window.setInterval(
      () => setActive((i) => (i + 1) % Math.max(1, words.length)),
      intervalMs,
    );
    return () => window.clearInterval(id);
  }, [intervalMs, words.length]);

  React.useEffect(() => {
    const container = containerRef.current;
    const el = refs.current[active];
    if (!container || !el) return;
    const c = container.getBoundingClientRect();
    const r = el.getBoundingClientRect();
    setRect({ x: r.left - c.left, y: r.top - c.top, w: r.width, h: r.height });
  }, [active, text]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full max-w-[760px] rounded-2xl border border-[var(--sb-border-2)] bg-[var(--sb-card)] p-6",
        className,
      )}
    >
      {rect ? (
        <motion.div
          className="pointer-events-none absolute rounded-xl border border-[var(--sb-accent)]"
          animate={{
            left: rect.x - 6,
            top: rect.y - 6,
            width: rect.w + 12,
            height: rect.h + 12,
          }}
          transition={{ type: "spring", stiffness: 420, damping: 30 }}
        />
      ) : null}
      <div className="text-[18px] font-black leading-relaxed text-[var(--sb-text-strong)]">
        {words.map((w, i) => (
          <span
            key={\`\${w}-\${i}\`}
            ref={(node) => {
              refs.current[i] = node;
            }}
            className={cn(
              "mr-2 inline-block rounded-lg px-1",
              i === active
                ? "text-[var(--sb-text-strong)]"
                : "text-[var(--sb-text-muted)]",
            )}
          >
            {w}
          </span>
        ))}
      </div>
    </div>
  );
}
`;
