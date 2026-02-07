"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import CodeBlock from "./CodeBlock";

interface CodeTabsProps {
  tabs: {
    title: string;
    code: string;
    language?: string;
  }[];
  className?: string;
}

const CodeTabs: React.FC<CodeTabsProps> = ({ tabs, className }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-(--sb-border) bg-[#1e1e1e]",
        className,
      )}
    >
      <div className="flex border-b border-white/10 bg-white/5">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={cn(
              "px-4 py-2.5 text-xs font-medium transition-colors",
              activeTab === index
                ? "bg-white/10 text-white"
                : "text-white/50 hover:bg-white/5 hover:text-white/80",
            )}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="p-0">
        <CodeBlock
          code={tabs[activeTab].code}
          language={tabs[activeTab].language || "javascript"}
        />
      </div>
    </div>
  );
};

export default CodeTabs;
