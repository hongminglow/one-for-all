"use client";

import * as React from "react";

import { cn } from "@/lib/cn";

export interface FeedbackWidgetProps {
  title?: string;
  className?: string;
}

const RATING = [
  { value: 1, label: "Bad" },
  { value: 2, label: "Okay" },
  { value: 3, label: "Good" },
  { value: 4, label: "Great" },
];

export default function FeedbackWidget({
  title = "How was this demo?",
  className,
}: FeedbackWidgetProps) {
  const [rating, setRating] = React.useState<number | null>(null);
  const [note, setNote] = React.useState("");
  const [sent, setSent] = React.useState(false);

  const send = () => {
    setSent(true);
    window.setTimeout(() => setSent(false), 1800);
  };

  return (
    <div
      className={cn(
        "w-full max-w-[520px] rounded-2xl border border-[var(--sb-border-2)] bg-[var(--sb-card)] p-4",
        className,
      )}
    >
      <div className="text-[13px] font-black text-[var(--sb-text-strong)]">
        {title}
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {RATING.map((r) => (
          <button
            key={r.value}
            type="button"
            onClick={() => setRating(r.value)}
            className={cn(
              "h-9 rounded-xl border px-3 text-[12px] font-black",
              rating === r.value
                ? "border-[var(--sb-accent)] bg-[var(--sb-selected)] text-[var(--sb-text-strong)]"
                : "border-[var(--sb-border)] bg-[var(--sb-panel)] text-[var(--sb-text-muted)] hover:bg-[var(--sb-hover)]",
            )}
          >
            {r.label}
          </button>
        ))}
      </div>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Optional note…"
        className="mt-3 w-full resize-none rounded-xl border border-[var(--sb-border)] bg-[var(--sb-panel)] px-3 py-2 text-[13px] font-semibold text-[var(--sb-text)] outline-none"
        rows={3}
      />
      <div className="mt-3 flex items-center justify-between">
        <div className="text-[11px] font-semibold text-[var(--sb-text-dim)]">
          Stored locally (demo only)
        </div>
        <button
          type="button"
          onClick={send}
          disabled={!rating}
          className="h-9 rounded-xl bg-[var(--sb-accent)] px-4 text-[12px] font-black text-[var(--sb-on-accent)] disabled:opacity-50"
        >
          {sent ? "Sent" : "Send"}
        </button>
      </div>
    </div>
  );
}
