export const code = `"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { MoreVertical, Plus, Search } from "lucide-react";

interface KanbanTask {
  id: string;
  title: string;
  category: string;
  priority: "Low" | "Medium" | "High";
}

interface Column {
  id: string;
  title: string;
  tasks: KanbanTask[];
}

const Kanban: React.FC = () => {
  const [columns, setColumns] = useState<Column[]>([
    {
      id: "todo",
      title: "To Do",
      tasks: [
        { id: "1", title: "Setup Project", category: "Dev", priority: "High" },
        {
          id: "2",
          title: "Design System",
          category: "Design",
          priority: "Medium",
        },
      ],
    },
    {
      id: "in-progress",
      title: "In Progress",
      tasks: [
        {
          id: "3",
          title: "API Integration",
          category: "Dev",
          priority: "High",
        },
      ],
    },
    {
      id: "done",
      title: "Done",
      tasks: [
        { id: "4", title: "Auth Module", category: "Dev", priority: "Medium" },
        {
          id: "5",
          title: "Onboarding Flow",
          category: "Design",
          priority: "Low",
        },
      ],
    },
  ]);

  return (
    <div className="w-full rounded-2xl border border-[var(--sb-border)] bg-[var(--sb-bg)] p-6 shadow-2xl">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-[var(--sb-text-strong)]">
            Kanban Board
          </h2>
          <p className="text-sm text-[var(--sb-text-muted)]">
            Product Launch Q1
          </p>
        </div>
        <div className="flex gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--sb-text-muted)]" />
            <input
              type="text"
              placeholder="Search tasks..."
              className="h-10 rounded-full border border-[var(--sb-border)] bg-transparent pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
          </div>
          <button className="flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-blue-700 hover:scale-105">
            <Plus className="h-4 w-4" />
            Add Task
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {columns.map((column) => (
          <div key={column.id} className="flex flex-col gap-4">
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-[var(--sb-text-strong)]">
                  {column.title}
                </h3>
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/5 text-[10px] font-bold text-[var(--sb-text-muted)]">
                  {column.tasks.length}
                </span>
              </div>
              <button className="text-[var(--sb-text-muted)] hover:text-white">
                <MoreVertical className="h-4 w-4" />
              </button>
            </div>

            <div className="flex min-h-[400px] flex-col gap-3 rounded-xl bg-white/[0.02] p-2">
              {column.tasks.map((task) => (
                <motion.div
                  key={task.id}
                  layoutId={task.id}
                  className="cursor-pointer rounded-xl border border-[var(--sb-border)] bg-[var(--sb-card)] p-4 shadow-sm transition-all hover:border-blue-500/30 hover:shadow-lg"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <span
                      className={cn(
                        "rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider",
                        task.category === "Dev"
                          ? "bg-blue-500/10 text-blue-400"
                          : "bg-pink-500/10 text-pink-400",
                      )}
                    >
                      {task.category}
                    </span>
                    <div
                      className={cn(
                        "h-2 w-2 rounded-full",
                        task.priority === "High"
                          ? "bg-red-500"
                          : task.priority === "Medium"
                            ? "bg-yellow-500"
                            : "bg-green-500",
                      )}
                    />
                  </div>
                  <h4 className="text-sm font-semibold leading-snug text-[var(--sb-text-strong)]">
                    {task.title}
                  </h4>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex -space-x-2">
                      {[1, 2].map((i) => (
                        <div
                          key={i}
                          className="h-6 w-6 rounded-full border-2 border-[var(--sb-card)] bg-gray-700"
                        />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold text-[var(--sb-text-muted)]">
                      Feb 12
                    </span>
                  </div>
                </motion.div>
              ))}
              <button className="flex items-center justify-center gap-2 rounded-lg border border-dashed border-[var(--sb-border)] py-3 text-xs font-medium text-[var(--sb-text-muted)] transition-colors hover:border-blue-500/40 hover:text-blue-400">
                <Plus className="h-3 w-3" />
                Add Task
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kanban;
`;
