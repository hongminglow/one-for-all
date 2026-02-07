"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

type Ripple = { id: string; x: number; y: number; size: number };

export interface RippleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  rippleColor?: string;
}

export default function RippleButton({
  children,
  className,
  rippleColor = "rgba(255,255,255,0.35)",
  onClick,
  ...props
}: RippleButtonProps) {
  const [ripples, setRipples] = React.useState<Ripple[]>([]);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const size = Math.max(rect.width, rect.height) * 1.4;
    const id = `${Date.now()}-${Math.random()}`;
    setRipples((prev) => [...prev, { id, x, y, size }]);
    window.setTimeout(
      () => setRipples((prev) => prev.filter((r) => r.id !== id)),
      650,
    );
    onClick?.(e);
  };

  return (
    <button
      type="button"
      className={cn(
        "relative isolate overflow-hidden rounded-xl border border-[var(--sb-border-2)] bg-[var(--sb-selected)] px-4 py-2 text-[12px] font-black text-[var(--sb-text-strong)]",
        className,
      )}
      onClick={handleClick}
      {...props}
    >
      {children}
      {ripples.map((r) => (
        <span
          key={r.id}
          className="pointer-events-none absolute rounded-full"
          style={{
            left: r.x - r.size / 2,
            top: r.y - r.size / 2,
            width: r.size,
            height: r.size,
            background: rippleColor,
            transform: "scale(0)",
            animation: "animateui-ripple 650ms ease-out forwards",
          }}
        />
      ))}
      <style jsx>{`
        @keyframes animateui-ripple {
          to {
            transform: scale(1);
            opacity: 0;
          }
        }
      `}</style>
    </button>
  );
}
