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
    if (!rating) return;
    setSent(true);
    setTimeout(() => setSent(false), 2000);
  };

  return (
    <div
      className={cn(
        "group relative w-full max-w-sm rounded-2xl border border-border bg-card p-4 shadow-sm transition-all hover:shadow-md",
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-foreground">{title}</h3>
        {sent && (
          <span className="text-xs font-medium text-emerald-500 animate-in fade-in slide-in-from-right-2">
            Thanks!
          </span>
        )}
      </div>

      <div className="mt-4 flex gap-2">
        {RATING.map((r) => (
          <button
            key={r.value}
            onClick={() => setRating(r.value)}
            className={cn(
              "flex-1 rounded-xl border py-2 text-xs font-medium transition-all hover:scale-105 active:scale-95",
              rating === r.value
                ? "border-primary bg-primary text-primary-foreground shadow-sm"
                : "border-border bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
            type="button"
          >
            {r.label}
          </button>
        ))}
      </div>

      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          rating
            ? "grid-rows-[1fr] mt-4 opacity-100"
            : "grid-rows-[0fr] mt-0 opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Tell us more (optional)..."
            className="w-full resize-none rounded-xl bg-muted/30 p-3 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring/20"
            rows={3}
          />
          <button
            onClick={send}
            disabled={sent}
            className="mt-2 w-full rounded-xl bg-foreground py-2 text-xs font-bold text-background transition-transform hover:opacity-90 active:scale-[0.98]"
          >
            Submit Feedback
          </button>
        </div>
      </div>
    </div>
  );
}
