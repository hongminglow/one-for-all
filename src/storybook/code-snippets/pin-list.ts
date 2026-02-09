export const code = `"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Pin, Trash2, Clock, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface Item {
  id: string;
  title: string;
  time: string;
  isPinned: boolean;
  status: "pending" | "completed";
}

const initialItems: Item[] = [
  {
    id: "1",
    title: "Project discovery meeting",
    time: "10:00 AM",
    isPinned: true,
    status: "pending",
  },
  {
    id: "2",
    title: "Update design tokens",
    time: "11:30 AM",
    isPinned: false,
    status: "completed",
  },
  {
    id: "3",
    title: "Review PR #442",
    time: "02:00 PM",
    isPinned: false,
    status: "pending",
  },
  {
    id: "4",
    title: "Client feedback loop",
    time: "04:15 PM",
    isPinned: false,
    status: "pending",
  },
];

const PinList: React.FC = () => {
  const [items, setItems] = useState(initialItems);

  const togglePin = (id: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isPinned: !item.isPinned } : item,
      ),
    );
  };

  const deleteItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const sortedItems = [...items].sort((a, b) => {
    if (a.isPinned === b.isPinned) return 0;
    return a.isPinned ? -1 : 1;
  });

  return (
    <div className="mx-auto w-full max-w-xl p-6">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-xl font-black italic tracking-tighter text-white">
          UPCOMING TASKS
        </h3>
        <div className="rounded-full bg-white/5 px-3 py-1 text-[10px] font-bold text-white/40 uppercase tracking-widest border border-white/5">
          {items.length} TOTAL
        </div>
      </div>

      <div className="space-y-3">
        <AnimatePresence mode="popLayout">
          {sortedItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 50,
                mass: 1,
              }}
              className={cn(
                "group relative flex items-center justify-between rounded-2xl border p-4 transition-all duration-300",
                item.isPinned
                  ? "border-blue-500/30 bg-blue-500/5 shadow-lg shadow-blue-500/5"
                  : "border-white/5 bg-white/[0.02] hover:bg-white/[0.04]",
              )}
            >
              <div className="flex items-center gap-4">
                <div
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-xl transition-colors",
                    item.status === "completed"
                      ? "bg-green-500/10 text-green-500"
                      : "bg-white/5 text-white/40",
                  )}
                >
                  {item.status === "completed" ? (
                    <CheckCircle2 className="h-5 w-5" />
                  ) : (
                    <Clock className="h-5 w-5" />
                  )}
                </div>
                <div>
                  <div className="text-sm font-bold text-white">
                    {item.title}
                  </div>
                  <div className="text-[10px] font-medium text-white/40 uppercase tracking-wider">
                    {item.time}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => togglePin(item.id)}
                  className={cn(
                    "rounded-lg p-2 transition-all hover:bg-white/10",
                    item.isPinned
                      ? "text-blue-500"
                      : "text-white/20 group-hover:text-white/40",
                  )}
                >
                  <Pin
                    className={cn("h-4 w-4", item.isPinned && "fill-current")}
                  />
                </button>
                <button
                  onClick={() => deleteItem(item.id)}
                  className="rounded-lg p-2 text-white/0 transition-all hover:bg-red-500/10 hover:text-red-500 group-hover:text-white/20"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>

              {item.isPinned && (
                <div className="absolute -left-1 top-1/2 -translate-y-1/2 h-8 w-1 rounded-full bg-blue-500" />
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PinList;
`;
