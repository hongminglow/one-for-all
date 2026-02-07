"use client";

import React from "react";
import { cn } from "@/lib/utils";
import CodeEditor from "./CodeEditor";

interface SandboxProps {
  code: string;
  preview: React.ReactNode;
  className?: string;
}

const Sandbox: React.FC<SandboxProps> = ({ code, preview, className }) => {
  return (
    <div
      className={cn(
        "grid overflow-hidden rounded-xl border border-(--sb-border) bg-(--sb-card) lg:grid-cols-2",
        className,
      )}
    >
      <div className="flex min-h-[300px] items-center justify-center border-r border-(--sb-border) bg-(--sb-bg) p-8">
        {preview}
      </div>
      <div className="bg-[#1e1e1e]">
        <CodeEditor
          code={code}
          typingAnimation={false}
          className="border-0 shadow-none"
        />
      </div>
    </div>
  );
};

export default Sandbox;
