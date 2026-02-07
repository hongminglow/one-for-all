"use client";

import { useState } from "react";
import { format } from "date-fns";
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function CalendarInput({ className }: { className?: string }) {
  const [date, setDate] = useState<Date>(new Date());
  const [isOpen, setIsOpen] = useState(false);

  // Simple calendar logic
  const daysInMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0,
  ).getDate();
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const padding = Array.from({ length: firstDay }, () => null);

  const prevMonth = () =>
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  const nextMonth = () =>
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  const selectDate = (d: number) => {
    setDate(new Date(date.getFullYear(), date.getMonth(), d));
    setIsOpen(false);
  };

  return (
    <div className={cn("relative w-full max-w-sm", className)}>
      <div
        className="flex items-center gap-2 px-3 py-2 rounded-lg border border-[var(--sb-border)] bg-[var(--sb-bg)] cursor-pointer hover:border-[var(--sb-accent)] transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <CalendarIcon className="w-5 h-5 text-[var(--sb-text-muted)]" />
        <span className="text-[var(--sb-text-strong)] font-medium">
          {format(date, "PPP")}
        </span>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 p-4 rounded-xl border border-[var(--sb-border)] bg-[var(--sb-card)] shadow-xl z-50 w-full min-w-[300px]">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={prevMonth}
              className="p-1 hover:bg-[var(--sb-border-2)] rounded-md"
            >
              <ChevronLeft className="w-5 h-5 text-[var(--sb-text-strong)]" />
            </button>
            <span className="font-bold text-[var(--sb-text-strong)]">
              {format(date, "MMMM yyyy")}
            </span>
            <button
              onClick={nextMonth}
              className="p-1 hover:bg-[var(--sb-border-2)] rounded-md"
            >
              <ChevronRight className="w-5 h-5 text-[var(--sb-text-strong)]" />
            </button>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center text-sm">
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
              <div
                key={d}
                className="text-[var(--sb-text-muted)] font-medium py-1"
              >
                {d}
              </div>
            ))}
            {padding.map((_, i) => (
              <div key={`pad-${i}`} />
            ))}
            {days.map((d) => (
              <button
                key={d}
                onClick={(e) => {
                  e.stopPropagation();
                  selectDate(d);
                }}
                className={cn(
                  "py-2 rounded-md transition-colors",
                  d === date.getDate()
                    ? "bg-[var(--sb-accent)] text-white font-bold"
                    : "text-[var(--sb-text-strong)] hover:bg-[var(--sb-border-2)]",
                )}
              >
                {d}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
