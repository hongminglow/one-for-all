export const code = `"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface IPhoneMockProps {
  children?: React.ReactNode;
  className?: string;
  img?: string;
}

const IPhoneMock: React.FC<IPhoneMockProps> = ({
  children,
  className,
  img,
}) => {
  return (
    <div
      className={cn(
        "relative mx-auto h-[600px] w-[300px] overflow-hidden rounded-[3rem] border-[8px] border-[#1a1a1a] bg-black shadow-2xl outline outline-1 outline-white/10",
        className,
      )}
    >
      {/* Dynamic Island */}
      <div className="absolute left-1/2 top-2 z-30 h-6 w-24 -translate-x-1/2 rounded-full bg-black shadow-inner" />

      {/* Screen Content */}
      <div className="relative h-full w-full overflow-hidden bg-white dark:bg-[#060606]">
        {img ? (
          <img
            src={img}
            alt="iPhone Mock"
            className="h-full w-full object-cover"
          />
        ) : children ? (
          children
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-tr from-[#ff512f] to-[#dd2476] p-4 text-center">
            <h4 className="text-xl font-black text-white italic">
              iPhone 15 Pro
            </h4>
          </div>
        )}
      </div>

      {/* Home Indicator */}
      <div className="absolute bottom-2 left-1/2 z-20 h-1.5 w-32 -translate-x-1/2 rounded-full bg-black/40 dark:bg-white/20" />
    </div>
  );
};

export default IPhoneMock;
`;
