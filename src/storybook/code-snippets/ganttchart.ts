export const code = `"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";

interface Task {
  id: string;
  name: string;
  start: number; // Day of month (1-30)
  duration: number; // in days
  color: string;
  progress: number;
}

const GanttChart: React.FC = () => {
  const [tasks] = useState<Task[]>([
    {
      id: "1",
      name: "Research",
      start: 2,
      duration: 5,
      color: "#3b82f6",
      progress: 80,
    },
    {
      id: "2",
      name: "Design",
      start: 6,
      duration: 8,
      color: "#ec4899",
      progress: 60,
    },
    {
      id: "3",
      name: "Development",
      start: 12,
      duration: 12,
      color: "#8b5cf6",
      progress: 30,
    },
    {
      id: "4",
      name: "Testing",
      start: 22,
      duration: 6,
      color: "#10b981",
      progress: 0,
    },
    {
      id: "5",
      name: "Deployment",
      start: 27,
      duration: 3,
      color: "#f59e0b",
      progress: 0,
    },
  ]);

  const days = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div className="w-full overflow-hidden rounded-xl border border-[var(--sb-border)] bg-[var(--sb-card)] shadow-xl">
      <div className="flex items-center justify-between border-b border-[var(--sb-border)] bg-[var(--sb-bg)] px-6 py-4">
        <div>
          <h3 className="text-lg font-bold text-[var(--sb-text-strong)]">
            Project Timeline
          </h3>
          <p className="text-sm text-[var(--sb-text-muted)]">February 2025</p>
        </div>
        <div className="flex gap-2">
          <button className="rounded-md border border-[var(--sb-border)] p-1.5 hover:bg-white/5">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button className="rounded-md border border-[var(--sb-border)] p-1.5 hover:bg-white/5">
            <ChevronRight className="h-4 w-4" />
          </button>
          <button className="flex items-center gap-1.5 rounded-md bg-blue-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-700">
            <Plus className="h-3.5 w-3.5" />
            New Task
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[800px]">
          {/* Header */}
          <div className="flex border-b border-[var(--sb-border)]">
            <div className="w-48 shrink-0 border-r border-[var(--sb-border)] px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[var(--sb-text-muted)]">
              Task Name
            </div>
            <div className="flex w-full">
              {days.map((day) => (
                <div
                  key={day}
                  className="flex-1 border-r border-[var(--sb-border)] py-3 text-center text-[10px] font-medium text-[var(--sb-text-muted)]"
                >
                  {day}
                </div>
              ))}
            </div>
          </div>

          {/* Body */}
          <div className="relative">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="group flex border-b border-[var(--sb-border)] last:border-0 hover:bg-white/[0.02]"
              >
                <div className="w-48 shrink-0 border-r border-[var(--sb-border)] px-4 py-4">
                  <span className="text-sm font-medium text-[var(--sb-text-strong)]">
                    {task.name}
                  </span>
                </div>
                <div className="relative flex w-full items-center">
                  {/* Grid Lines */}
                  <div className="absolute inset-0 flex pointer-events-none">
                    {days.map((day) => (
                      <div
                        key={day}
                        className="flex-1 border-r border-[var(--sb-border)]"
                      />
                    ))}
                  </div>

                  {/* Task Bar */}
                  <div
                    className="relative h-7 rounded-sm shadow-sm transition-transform hover:scale-[1.02]"
                    style={{
                      left: \`\${((task.start - 1) / 30) * 100}%\`,
                      width: \`\${(task.duration / 30) * 100}%\`,
                      backgroundColor: task.color,
                    }}
                  >
                    {/* Progress Bar */}
                    <div
                      className="absolute inset-y-0 left-0 bg-black/20"
                      style={{ width: \`\${task.progress}%\` }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="truncate px-2 text-[10px] font-bold text-white drop-shadow-sm">
                        {task.progress}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GanttChart;
`;
