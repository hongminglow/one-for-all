export const code = `"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const MiniCalendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().getDate());

  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const dates = Array.from({ length: 14 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i - 3); // Start from 3 days ago
    return {
      day: days[d.getDay()],
      date: d.getDate(),
      month: d.toLocaleString("default", { month: "short" }).toUpperCase(),
    };
  });

  return (
    <div className="mx-auto w-full max-w-xl p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-black italic tracking-tighter text-white uppercase">
            Schedule
          </h3>
          <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest">
            FEBRUARY 2024
          </p>
        </div>
        <div className="flex gap-2">
          <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-white/40 transition-colors hover:bg-white/10 hover:text-white">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-white/40 transition-colors hover:bg-white/10 hover:text-white">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar">
        {dates.map((item, i) => {
          const isSelected = selectedDate === item.date;
          return (
            <button
              key={i}
              onClick={() => setSelectedDate(item.date)}
              className={cn(
                "relative flex min-w-[70px] flex-col items-center justify-center rounded-2xl py-6 transition-all duration-300",
                isSelected
                  ? "bg-white text-black shadow-xl shadow-white/10"
                  : "bg-white/[0.03] text-white/40 hover:bg-white/[0.06] hover:text-white/60",
              )}
            >
              <span className="text-[10px] font-black tracking-widest">
                {item.day}
              </span>
              <span className="mt-1 text-2xl font-black italic tracking-tighter">
                {item.date}
              </span>

              {isSelected && (
                <motion.div
                  layoutId="active-dot"
                  className="absolute bottom-2 h-1.5 w-1.5 rounded-full bg-black"
                />
              )}
            </button>
          );
        })}
      </div>

      <div className="mt-6 rounded-2xl border border-white/5 bg-white/[0.02] p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="h-12 w-1.5 rounded-full bg-blue-500" />
            <div>
              <div className="text-sm font-bold text-white">Daily Standup</div>
              <div className="text-[10px] font-medium text-white/40 uppercase tracking-wider">
                09:30 AM — 10:00 AM
              </div>
            </div>
          </div>
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-6 w-6 rounded-full border-2 border-[var(--sb-bg)] bg-white/10"
              >
                <img
                  src={\`https://i.pravatar.cc/150?u=\${i}\`}
                  className="h-full w-full rounded-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniCalendar;
`;
