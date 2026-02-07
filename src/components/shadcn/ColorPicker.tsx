"use client";

import React, { useState } from "react";
import { Pipette, Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const ColorPicker: React.FC = () => {
  const [color, setColor] = useState("#8b5cf6");
  const [copied, setCopied] = useState(false);

  const presets = [
    "#ef4444",
    "#f97316",
    "#f59e0b",
    "#10b981",
    "#3b82f6",
    "#6366f1",
    "#8b5cf6",
    "#d946ef",
    "#f43f5e",
    "#fffff",
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(color);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mx-auto w-full max-w-[320px] rounded-2xl border border-[var(--sb-border)] bg-[var(--sb-card)] p-5 shadow-2xl">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--sb-text-muted)]">
          Color Picker
        </h3>
        <Pipette className="h-4 w-4 text-[var(--sb-text-muted)]" />
      </div>

      <div
        className="mb-6 h-40 w-full rounded-xl border border-white/10 shadow-inner overflow-hidden relative"
        style={{ backgroundColor: color }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/20 pointer-events-none" />
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {presets.map((p) => (
          <button
            key={p}
            onClick={() => setColor(p)}
            className={cn(
              "h-7 w-7 rounded-full border border-white/10 transition-transform hover:scale-125",
              color === p &&
                "ring-2 ring-blue-500 ring-offset-2 ring-offset-[#111]",
            )}
            style={{ backgroundColor: p }}
          />
        ))}
      </div>

      <div className="flex items-center gap-2 rounded-lg bg-black/40 p-3">
        <div
          className="h-10 w-10 shrink-0 rounded-md border border-white/10"
          style={{ backgroundColor: color }}
        />
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-full bg-transparent font-mono text-sm font-bold uppercase text-white outline-none"
        />
        <button
          onClick={handleCopy}
          className="flex h-9 w-9 items-center justify-center rounded-md bg-white/5 transition-colors hover:bg-white/10"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4 text-white/50" />
          )}
        </button>
      </div>
    </div>
  );
};

export default ColorPicker;
