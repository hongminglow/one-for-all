"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, File, X, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const Dropzone: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState<{ name: string; size: string }[]>([]);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    // Simulate file adding
    const newFiles = Array.from(e.dataTransfer.files).map((f) => ({
      name: f.name,
      size: (f.size / 1024).toFixed(1) + " KB",
    }));
    setFiles([...files, ...newFiles]);
  };

  return (
    <div className="mx-auto w-full max-w-xl p-6">
      <motion.div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        animate={{
          scale: isDragging ? 1.02 : 1,
          borderColor: isDragging ? "#3b82f6" : "rgba(255,255,255,0.1)",
        }}
        className={cn(
          "relative flex flex-col items-center justify-center rounded-3xl border-2 border-dashed bg-white/[0.02] py-12 px-6 text-center transition-colors",
          isDragging
            ? "bg-blue-500/5 shadow-2xl shadow-blue-500/10"
            : "hover:bg-white/[0.04]",
        )}
      >
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/10 text-blue-500">
          <Upload
            className={cn(
              "h-8 w-8 transition-transform",
              isDragging && "scale-125",
            )}
          />
        </div>
        <h3 className="mb-2 text-xl font-bold text-[var(--sb-text-strong)]">
          {isDragging ? "Drop files here" : "Upload your assets"}
        </h3>
        <p className="mb-8 text-sm text-[var(--sb-text-muted)]">
          Drag and drop files here, or click to browse
        </p>

        <button className="rounded-full bg-white px-6 py-2.5 text-sm font-bold text-black shadow-lg transition-transform hover:scale-105 active:scale-95">
          Select Files
        </button>
      </motion.div>

      <div className="mt-8 space-y-3">
        <AnimatePresence>
          {files.map((file, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="group flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.03] p-4"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-white/40 group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-colors">
                  <File className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-bold text-[var(--sb-text-strong)]">
                    {file.name}
                  </div>
                  <div className="text-[10px] font-medium text-[var(--sb-text-muted)] uppercase tracking-wider">
                    {file.size}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                <button
                  onClick={() => setFiles(files.filter((_, idx) => idx !== i))}
                  className="rounded-md p-1.5 text-[var(--sb-text-muted)] hover:bg-red-500/10 hover:text-red-500 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Dropzone;
