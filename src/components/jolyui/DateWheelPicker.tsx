"use client";

import * as React from "react";

import { cn } from "@/lib/cn";

export interface DateWheelPickerProps {
  value?: Date;
  onChange: (date: Date) => void;
  minYear?: number;
  maxYear?: number;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  locale?: string;
  className?: string;
}

function getMonthNames(locale?: string): string[] {
  const formatter = new Intl.DateTimeFormat(locale, { month: "long" });
  return Array.from({ length: 12 }, (_, i) =>
    formatter.format(new Date(2000, i, 1)),
  );
}

function daysInMonth(year: number, monthIndex: number) {
  return new Date(year, monthIndex + 1, 0).getDate();
}

const SIZE: Record<NonNullable<DateWheelPickerProps["size"]>, string> = {
  sm: "h-9 text-[12px]",
  md: "h-10 text-[13px]",
  lg: "h-12 text-[14px]",
};

export default function DateWheelPicker({
  value,
  onChange,
  minYear = 1970,
  maxYear = new Date().getFullYear() + 10,
  size = "md",
  disabled,
  locale,
  className,
}: DateWheelPickerProps) {
  const date = value ?? new Date();
  const [y, setY] = React.useState(date.getFullYear());
  const [m, setM] = React.useState(date.getMonth());
  const [d, setD] = React.useState(date.getDate());

  React.useEffect(() => {
    const next = new Date(y, m, Math.min(d, daysInMonth(y, m)));
    setD(next.getDate());
    onChange(next);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [y, m]);

  React.useEffect(() => {
    onChange(new Date(y, m, d));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [d]);

  const months = React.useMemo(() => getMonthNames(locale), [locale]);
  const days = daysInMonth(y, m);

  const selectBase = cn(
    "rounded-xl border border-[var(--sb-border)] bg-[var(--sb-panel)] px-3",
    "text-[var(--sb-text-strong)] outline-none",
    SIZE[size],
  );

  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      <select
        className={selectBase}
        value={m}
        onChange={(e) => setM(Number(e.target.value))}
        disabled={disabled}
        aria-label="Month"
      >
        {months.map((name, idx) => (
          <option key={name} value={idx}>
            {name}
          </option>
        ))}
      </select>
      <select
        className={selectBase}
        value={d}
        onChange={(e) => setD(Number(e.target.value))}
        disabled={disabled}
        aria-label="Day"
      >
        {Array.from({ length: days }, (_, i) => i + 1).map((day) => (
          <option key={day} value={day}>
            {day}
          </option>
        ))}
      </select>
      <select
        className={selectBase}
        value={y}
        onChange={(e) => setY(Number(e.target.value))}
        disabled={disabled}
        aria-label="Year"
      >
        {Array.from({ length: maxYear - minYear + 1 }, (_, i) => minYear + i)
          .reverse()
          .map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
      </select>
    </div>
  );
}
