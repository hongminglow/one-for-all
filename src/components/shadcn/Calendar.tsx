"use client";

import * as React from "react";

import { cn } from "@/lib/cn";

export interface CalendarProps {
  value?: Date;
  onChange?: (value: Date) => void;
  className?: string;
}

function startOfMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function addMonths(date: Date, n: number) {
  return new Date(date.getFullYear(), date.getMonth() + n, 1);
}

function sameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export default function Calendar({
  value,
  onChange,
  className,
}: CalendarProps) {
  const [month, setMonth] = React.useState(() =>
    startOfMonth(value ?? new Date()),
  );
  const selected = value;
  const today = new Date();

  const days = React.useMemo(() => {
    const first = startOfMonth(month);
    const startWeekday = first.getDay(); // 0=Sun
    const start = new Date(first);
    start.setDate(first.getDate() - startWeekday);

    return Array.from({ length: 42 }, (_, i) => {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      return d;
    });
  }, [month]);

  const label = new Intl.DateTimeFormat(undefined, {
    month: "long",
    year: "numeric",
  }).format(month);
  const week = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  return (
    <div
      className={cn(
        "w-full max-w-[360px] rounded-2xl border border-[var(--sb-border-2)] bg-[var(--sb-card)] p-4",
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => setMonth((m) => addMonths(m, -1))}
          className="h-9 rounded-xl border border-[var(--sb-border)] bg-[var(--sb-panel)] px-3 text-[12px] font-black text-[var(--sb-text-strong)] hover:bg-[var(--sb-hover)]"
        >
          Prev
        </button>
        <div className="text-[12px] font-black text-[var(--sb-text-strong)]">
          {label}
        </div>
        <button
          type="button"
          onClick={() => setMonth((m) => addMonths(m, 1))}
          className="h-9 rounded-xl border border-[var(--sb-border)] bg-[var(--sb-panel)] px-3 text-[12px] font-black text-[var(--sb-text-strong)] hover:bg-[var(--sb-hover)]"
        >
          Next
        </button>
      </div>

      <div className="mt-3 grid grid-cols-7 gap-1">
        {week.map((w) => (
          <div
            key={w}
            className="py-1 text-center text-[11px] font-black text-[var(--sb-text-dim)]"
          >
            {w}
          </div>
        ))}
        {days.map((d) => {
          const inMonth = d.getMonth() === month.getMonth();
          const isSel = selected ? sameDay(selected, d) : false;
          const isToday = sameDay(today, d);

          return (
            <button
              key={`${d.toISOString()}`}
              type="button"
              onClick={() => onChange?.(d)}
              className={cn(
                "h-9 rounded-xl text-center text-[12px] font-black",
                inMonth
                  ? "text-[var(--sb-text-strong)]"
                  : "text-[var(--sb-text-dim)] opacity-60",
                isSel
                  ? "bg-[var(--sb-accent)] text-[var(--sb-on-accent)]"
                  : "bg-[var(--sb-panel)] hover:bg-[var(--sb-hover)]",
                isToday && !isSel ? "ring-1 ring-[var(--sb-border-2)]" : "",
              )}
            >
              {d.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}
