"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TabsProps {
  tabs: { id: string; label: string; content?: React.ReactNode }[];
  activeTab?: string;
  onTabChange?: (id: string) => void;
  className?: string;
}

const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  onTabChange,
  className,
}) => {
  const [active, setActive] = useState(activeTab || tabs[0].id);

  const handleTabClick = (id: string) => {
    setActive(id);
    if (onTabChange) onTabChange(id);
  };

  return (
    <div className={cn("flex flex-col gap-8 p-4", className)}>
      <div className="relative flex w-fit items-center rounded-2xl bg-white/5 p-1.5 backdrop-blur-md border border-white/5">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={cn(
              "relative px-6 py-2.5 text-sm font-bold transition-all duration-300",
              active === tab.id
                ? "text-black"
                : "text-white/40 hover:text-white/60",
            )}
          >
            {active === tab.id && (
              <motion.div
                layoutId="active-tab"
                className="absolute inset-0 rounded-xl bg-white shadow-lg"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8 min-h-[200px] flex items-center justify-center text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -10 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            {tabs.find((t) => t.id === active)?.content || (
              <div className="text-white/60 font-medium">
                Content for{" "}
                <span className="text-white font-bold">
                  {tabs.find((t) => t.id === active)?.label}
                </span>{" "}
                tab displayed here.
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

// Helper for AnimatePresence
import { AnimatePresence } from "framer-motion";

export default Tabs;
