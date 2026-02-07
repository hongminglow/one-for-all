"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export interface CopyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  label?: string;
  copiedLabel?: string;
  onCopiedChange?: (copied: boolean) => void;
}

export default function CopyButton({
  text,
  label = "Copy",
  copiedLabel = "Copied",
  className,
  onCopiedChange,
  onClick,
  ...props
}: CopyButtonProps) {
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    if (!copied) return;
    const id = window.setTimeout(() => setCopied(false), 1500);
    return () => window.clearTimeout(id);
  }, [copied]);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
    onClick?.(e);
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      onCopiedChange?.(true);
    } catch {
      setCopied(false);
      onCopiedChange?.(false);
    }
  };

  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center justify-center rounded-xl border border-[var(--sb-border-2)] bg-[var(--sb-selected)] px-3 py-2 text-[12px] font-black text-[var(--sb-text-strong)] transition",
        copied && "opacity-90",
        className,
      )}
      onClick={handleClick}
      {...props}
    >
      {copied ? copiedLabel : label}
    </button>
  );
}
