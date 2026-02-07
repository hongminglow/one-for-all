"use client";

import * as React from "react";
import { createPortal } from "react-dom";

import { cn } from "@/lib/utils";

export interface SheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  children: React.ReactNode;
  side?: "right" | "left";
  className?: string;
}

export default function Sheet({
  open,
  onOpenChange,
  title,
  children,
  side = "right",
  className,
}: SheetProps) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onOpenChange]);

  if (!mounted) return null;
  if (!open) return null;

  const panelSide = side === "left" ? "left-0" : "right-0";
  const translateFrom =
    side === "left" ? "-translate-x-full" : "translate-x-full";

  return createPortal(
    <div className="fixed inset-0 z-[70]">
      <button
        type="button"
        aria-label="Close"
        className="absolute inset-0 bg-black/40"
        onClick={() => onOpenChange(false)}
      />
      <div
        className={cn(
          "absolute top-0 h-full w-[360px] max-w-[90vw] border-l border-[var(--sb-border-2)] bg-[var(--sb-card)] p-5 text-[var(--sb-text-strong)] shadow-xl",
          panelSide,
          className,
        )}
        style={{
          animation: "animateui-sheet-in 220ms ease-out",
        }}
      >
        <div className="flex items-center justify-between">
          <div className="text-[14px] font-black">{title ?? "Sheet"}</div>
          <button
            type="button"
            className="rounded-lg border border-[var(--sb-border-2)] bg-[var(--sb-selected)] px-2 py-1 text-[12px] font-black"
            onClick={() => onOpenChange(false)}
          >
            Close
          </button>
        </div>
        <div className="mt-4 text-[13px] text-[var(--sb-text-muted)]">
          {children}
        </div>
      </div>
      <style jsx>{`
        @keyframes animateui-sheet-in {
          from {
            transform: ${translateFrom};
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>,
    document.body,
  );
}
