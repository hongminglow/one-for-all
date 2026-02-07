"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface AndroidMockProps {
  children?: React.ReactNode;
  className?: string;
  img?: string;
}

const AndroidMock: React.FC<AndroidMockProps> = ({
  children,
  className,
  img,
}) => {
  return (
    <div
      className={cn(
        "relative mx-auto h-[600px] w-[300px] overflow-hidden rounded-[2.5rem] border-[8px] border-[#1a1a1a] bg-[#000] shadow-2xl outline outline-1 outline-white/10",
        className,
      )}
    >
      {/* Top Bar / Notch */}
      <div className="absolute top-0 z-20 flex h-7 w-full items-center justify-between px-6 bg-black/50 backdrop-blur-sm">
        <span className="text-[10px] font-bold text-white">9:41</span>
        <div className="flex items-center gap-1.5">
          <div className="h-3 w-3 rounded-full border border-white/40" />
          <div className="h-3 w-3 rounded-full border border-white/40" />
        </div>
      </div>

      {/* Screen Content */}
      <div className="relative h-full w-full overflow-hidden bg-white dark:bg-[#060606]">
        {img ? (
          <img
            src={img}
            alt="Android Mock"
            className="h-full w-full object-cover"
          />
        ) : children ? (
          children
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-indigo-900 to-black p-4 text-center">
            <h4 className="text-xl font-black text-white">Android Display</h4>
          </div>
        )}
      </div>

      {/* Navigation Bar */}
      <div className="absolute bottom-2 left-1/2 z-20 h-1 w-24 -translate-x-1/2 rounded-full bg-white/30" />
    </div>
  );
};

export default AndroidMock;
