import * as React from "react";
import { cn } from "@/lib/utils";

interface DateWheelPickerProps {
  date?: Date;
  onChange?: (date: Date) => void;
  minYear?: number;
  maxYear?: number;
}

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function Wheel({
  items,
  selectedValue,
  onSelect,
  label,
}: {
  items: (string | number)[];
  selectedValue: string | number;
  onSelect: (value: string | number) => void;
  label: string;
}) {
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    // Only basic logic here, no unused vars
    // We check purely based on scroll position to "snap" visually
    // but actual selection logic could be debounced or on click
  };

  return (
    <div className="relative h-[200px] w-24 overflow-hidden rounded-xl bg-card border border-border">
      <div
        className="no-scrollbar h-full w-full overflow-y-scroll snap-y snap-mandatory py-[80px]"
        ref={containerRef}
        onScroll={handleScroll}
        aria-label={label}
      >
        {items.map((item, i) => (
          <div
            key={i}
            className={cn(
              "flex h-[40px] items-center justify-center snap-center cursor-pointer text-sm font-medium transition-colors",
              item === selectedValue
                ? "text-primary font-bold scale-110"
                : "text-muted-foreground",
            )}
            onClick={() => {
              onSelect(item);
              // basic scroll into view logic
              containerRef.current?.scrollTo({
                top: i * 40,
                behavior: "smooth",
              });
            }}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-background/90 via-transparent to-background/90" />
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-[40px] -translate-y-1/2 border-y border-border/50 bg-accent/5" />
    </div>
  );
}

export default function DateWheelPicker({
  date = new Date(),
  onChange,
  minYear = 1900,
  maxYear = 2100,
}: DateWheelPickerProps) {
  const [selectedDate, setSelectedDate] = React.useState(date);

  const years = React.useMemo(() => {
    return Array.from({ length: maxYear - minYear + 1 }, (_, i) => minYear + i);
  }, [minYear, maxYear]);

  const daysInMonth = (month: number, year: number) =>
    new Date(year, month + 1, 0).getDate();
  const days = Array.from(
    {
      length: daysInMonth(selectedDate.getMonth(), selectedDate.getFullYear()),
    },
    (_, i) => i + 1,
  );

  const updateDate = (
    type: "month" | "day" | "year",
    value: number | string,
  ) => {
    const newDate = new Date(selectedDate);
    if (type === "month") {
      newDate.setMonth(months.indexOf(value as string));
    } else if (type === "day") {
      newDate.setDate(value as number);
    } else {
      newDate.setFullYear(value as number);
    }
    setSelectedDate(newDate);
    onChange?.(newDate);
  };

  return (
    <div className="flex gap-4 p-4 rounded-xl border border-border bg-background/50 backdrop-blur-sm">
      <Wheel
        label="Month"
        items={months}
        selectedValue={months[selectedDate.getMonth()]}
        onSelect={(val) => updateDate("month", val)}
      />
      <Wheel
        label="Day"
        items={days}
        selectedValue={selectedDate.getDate()}
        onSelect={(val) => updateDate("day", val)}
      />
      <Wheel
        label="Year"
        items={years}
        selectedValue={selectedDate.getFullYear()}
        onSelect={(val) => updateDate("year", val)}
      />
    </div>
  );
}
