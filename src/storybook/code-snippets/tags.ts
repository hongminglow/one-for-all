export const code = `"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Hash } from "lucide-react";

const Tags: React.FC = () => {
  const [tags, setTags] = useState([
    "React",
    "TypeScript",
    "Next.js",
    "Motion",
  ]);
  const [inputValue, setInputValue] = useState("");

  const addTag = () => {
    if (inputValue.trim() && !tags.includes(inputValue.trim())) {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="mx-auto w-full max-w-xl p-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-xl font-black italic tracking-tighter text-white lowercase">
          #tags
        </h3>
        <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest">
          {tags.length} TAGS
        </div>
      </div>

      <div className="flex flex-wrap gap-2 rounded-2xl border border-white/5 bg-white/[0.02] p-3 transition-all focus-within:border-white/10 focus-within:bg-white/[0.04]">
        <AnimatePresence mode="popLayout">
          {tags.map((tag) => (
            <motion.div
              key={tag}
              layout
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="flex items-center gap-1.5 rounded-lg bg-white/5 px-3 py-1.5 text-sm font-bold text-white/80 transition-colors hover:bg-white/10"
            >
              <Hash className="h-3 w-3 text-white/20" />
              {tag}
              <button
                onClick={() => removeTag(tag)}
                className="ml-1 text-white/20 hover:text-red-400 transition-colors"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>

        <div className="flex flex-1 items-center min-w-[120px]">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTag()}
            placeholder="Add tag..."
            className="w-full bg-transparent px-2 py-1.5 text-sm text-white placeholder:text-white/20 outline-none"
          />
          <button
            onClick={addTag}
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-white/40 hover:bg-white/10 hover:text-white transition-all disabled:opacity-0"
            disabled={!inputValue.trim()}
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      <p className="mt-4 text-center text-[10px] font-medium text-white/20 uppercase tracking-widest">
        Press enter to add a new tag
      </p>
    </div>
  );
};

export default Tags;
`;
