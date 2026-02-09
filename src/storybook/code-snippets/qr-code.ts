export const code = `"use client";

import React, { useState } from "react";
import { QrCode as QrIcon, Download, Share2, Sparkles } from "lucide-react";

const QrCode: React.FC = () => {
  const [value, setValue] = useState("https://shadcn.io");

  return (
    <div className="mx-auto w-full max-w-sm overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#060606] p-8 shadow-2xl">
      <div className="flex flex-col items-center gap-8">
        <div className="relative group">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-blue-500 to-cyan-500 opacity-20 blur-xl transition-opacity group-hover:opacity-40" />

          <div className="relative aspect-square w-48 rounded-[2rem] bg-white p-4 shadow-2xl">
            <img
              src={\`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=\${encodeURIComponent(value)}&bgcolor=ffffff&color=2463eb\`}
              alt="QR Code"
              className="h-full w-full object-contain"
            />
            <div className="absolute inset-x-0 -bottom-2 flex justify-center">
              <div className="rounded-full bg-blue-500 px-3 py-1 text-[8px] font-black text-white shadow-lg uppercase tracking-widest">
                Dynamic
              </div>
            </div>
          </div>
        </div>

        <div className="w-full space-y-4">
          <div className="relative">
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="w-full rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/20 outline-none transition-all focus:border-white/10 focus:bg-white/[0.05]"
              placeholder="Enter URL..."
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-white/20">
              <QrIcon className="h-4 w-4" />
            </div>
          </div>

          <div className="flex gap-2">
            <button className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-black text-black transition-transform hover:scale-105 active:scale-95 shadow-lg">
              <Download className="h-4 w-4" />
              Export
            </button>
            <button className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-white/40 transition-colors hover:bg-white/10 hover:text-white">
              <Share2 className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-1.5 border border-blue-500/20">
          <Sparkles className="h-3 w-3 text-blue-400" />
          <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">
            Theme Aware
          </span>
        </div>
      </div>
    </div>
  );
};

export default QrCode;
`;
