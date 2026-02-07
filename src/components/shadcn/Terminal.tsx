"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Terminal as TerminalIcon, Copy, Check, Minimize2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface TerminalProps {
  title?: string;
  commands: { command: string; output: string | string[] }[];
  className?: string;
}

const Terminal: React.FC<TerminalProps> = ({
  title = "bash",
  commands,
  className,
}) => {
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState<
    { type: "cmd" | "out"; text: string }[]
  >([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let currentHistory: { type: "cmd" | "out"; text: string }[] = [];
    let timeoutId: NodeJS.Timeout | undefined;

    const streamCommands = async () => {
      for (const item of commands) {
        currentHistory.push({ type: "cmd", text: item.command });
        setHistory([...currentHistory]);
        await new Promise((r) => setTimeout(r, 600));

        const outputs = Array.isArray(item.output)
          ? item.output
          : [item.output];
        for (const out of outputs) {
          currentHistory.push({ type: "out", text: out });
          setHistory([...currentHistory]);
          await new Promise((r) => setTimeout(r, 200));
        }
        await new Promise((r) => setTimeout(r, 800));
      }
    };

    streamCommands();
    return () => clearTimeout(timeoutId);
  }, [commands]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const copyToClipboard = () => {
    const text = commands
      .map(
        (c) =>
          `${c.command}\n${Array.isArray(c.output) ? c.output.join("\n") : c.output}`,
      )
      .join("\n");
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={cn(
        "mx-auto w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c0c] shadow-2xl",
        className,
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between bg-white/5 px-4 py-2.5 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-rose-500/80" />
            <div className="h-3 w-3 rounded-full bg-amber-500/80" />
            <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
          </div>
          <div className="ml-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40">
            <TerminalIcon className="h-3 w-3" />
            {title}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={copyToClipboard}
            className="rounded-md p-1.5 text-white/40 transition-colors hover:bg-white/10 hover:text-white"
          >
            {copied ? (
              <Check className="h-3.5 w-3.5 text-emerald-500" />
            ) : (
              <Copy className="h-3.5 w-3.5" />
            )}
          </button>
          <div className="h-4 w-px bg-white/10" />
          <button className="text-white/20 hover:text-white/40">
            <Minimize2 className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Body */}
      <div
        ref={scrollRef}
        className="h-[300px] overflow-y-auto p-6 font-mono text-sm leading-relaxed scrollbar-thin scrollbar-thumb-white/10"
      >
        <div className="space-y-2">
          {history.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              className={cn(
                line.type === "cmd" ? "text-emerald-400" : "text-zinc-400",
              )}
            >
              {line.type === "cmd" && (
                <span className="mr-2 text-white/20 select-none">$</span>
              )}
              {line.text}
            </motion.div>
          ))}
          <motion.div
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block h-4 w-2 bg-emerald-500/50 align-middle"
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
