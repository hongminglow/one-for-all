"use client";

import * as React from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/cn";

export interface AIPromptBoxProps {
  placeholder?: string;
  disabled?: boolean;
  isLoading?: boolean;
  onSubmit?: (value: string) => void;
  className?: string;
}

export default function AIPromptBox({
  placeholder = "Ask something…",
  disabled,
  isLoading,
  onSubmit,
  className,
}: AIPromptBoxProps) {
  const [value, setValue] = React.useState("");
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  const submit = () => {
    const trimmed = value.trim();
    if (!trimmed) return;
    onSubmit?.(trimmed);
    setValue("");
  };

  React.useEffect(() => {
    const node = textareaRef.current;
    if (!node) return;
    node.style.height = "0px";
    node.style.height = `${Math.min(220, node.scrollHeight)}px`;
  }, [value]);

  return (
    <div
      className={cn(
        "w-full max-w-[720px] rounded-2xl border border-[var(--sb-border-2)] bg-[var(--sb-card)] p-3",
        className,
      )}
    >
      <div className="flex items-end gap-2">
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          disabled={disabled || isLoading}
          rows={1}
          className={cn(
            "min-h-[44px] w-full resize-none rounded-xl bg-[var(--sb-panel)] px-3 py-3",
            "text-[13px] font-semibold text-[var(--sb-text)] placeholder:text-[var(--sb-text-dim)]",
            "outline-none ring-0",
          )}
          onKeyDown={(e) => {
            if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
              e.preventDefault();
              submit();
            }
          }}
        />
        <button
          type="button"
          onClick={submit}
          disabled={disabled || isLoading || !value.trim()}
          className={cn(
            "h-[44px] shrink-0 rounded-xl px-4 text-[12px] font-black",
            "bg-[var(--sb-accent)] text-[var(--sb-on-accent)]",
            "disabled:opacity-50 disabled:pointer-events-none",
          )}
        >
          {isLoading ? "Stop" : "Send"}
        </button>
      </div>
      <div className="mt-2 flex items-center justify-between px-1">
        <div className="text-[11px] font-semibold text-[var(--sb-text-muted)]">
          Tip: press <span className="font-black">Ctrl</span> +{" "}
          <span className="font-black">Enter</span>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[11px] font-semibold text-[var(--sb-text-dim)]"
        >
          {value.length}/500
        </motion.div>
      </div>
    </div>
  );
}
