"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export interface PopoverProps {
  trigger: React.ReactNode;
  content: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  align?: "start" | "center" | "end";
  side?: "top" | "bottom";
  className?: string;
  contentClassName?: string;
}

export default function Popover({
  trigger,
  content,
  open,
  defaultOpen = false,
  onOpenChange,
  align = "center",
  side = "bottom",
  className,
  contentClassName,
}: PopoverProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen);
  const isControlled = typeof open === "boolean";
  const isOpen = isControlled ? open : uncontrolledOpen;

  const rootRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (!isOpen) return;
    const onDown = (e: MouseEvent) => {
      const root = rootRef.current;
      if (!root) return;
      if (e.target instanceof Node && root.contains(e.target)) return;
      if (!isControlled) setUncontrolledOpen(false);
      onOpenChange?.(false);
    };
    window.addEventListener("mousedown", onDown);
    return () => window.removeEventListener("mousedown", onDown);
  }, [isControlled, isOpen, onOpenChange]);

  const toggle = () => {
    const next = !isOpen;
    if (!isControlled) setUncontrolledOpen(next);
    onOpenChange?.(next);
  };

  const sideClass = side === "top" ? "bottom-full mb-2" : "top-full mt-2";
  const alignClass =
    align === "start"
      ? "left-0"
      : align === "end"
        ? "right-0"
        : "left-1/2 -translate-x-1/2";

  return (
    <div ref={rootRef} className={cn("relative inline-block", className)}>
      <span
        onClick={toggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggle();
          }
        }}
        role="button"
        tabIndex={0}
        className="inline-flex"
      >
        {trigger}
      </span>
      {isOpen && (
        <div
          className={cn(
            "absolute z-50 min-w-56 rounded-xl border border-[var(--sb-border-2)] bg-[var(--sb-card)] p-4 text-[13px] text-[var(--sb-text-strong)] shadow-sm",
            sideClass,
            alignClass,
            contentClassName,
          )}
        >
          {content}
        </div>
      )}
    </div>
  );
}
