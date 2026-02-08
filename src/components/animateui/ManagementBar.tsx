"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Progress } from "@/components/animate-ui/components/radix/progress";

export interface ManagementBarProps {
  title?: string;
  className?: string;
}

export default function ManagementBar({
  title = "Management",
  className,
}: ManagementBarProps) {
  const [value, setValue] = React.useState(64);

  return (
    <div
      className={cn(
        "w-full max-w-[760px] rounded-2xl border border-[var(--sb-border-2)] bg-[var(--sb-card)] p-6",
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <div className="text-[14px] font-black text-[var(--sb-text-strong)]">
          {title}
        </div>
        <div className="rounded-xl border border-[var(--sb-border-2)] bg-[var(--sb-selected)] px-3 py-1 text-[12px] font-black text-[var(--sb-text-strong)]">
          {value}%
        </div>
      </div>
      <div className="mt-4">
        <Progress value={value} />
      </div>
      <div className="mt-4">
        <input
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="w-full"
        />
      </div>
    </div>
  );
}
