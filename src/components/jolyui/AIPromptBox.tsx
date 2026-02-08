"use client";

import * as React from "react";

import { cn } from "@/lib/cn";

export interface AIPromptBoxProps {
  placeholder?: string;
  disabled?: boolean;
  isLoading?: boolean;
  onSubmit?: (value: string) => void;
  className?: string;
}

import { ArrowUp, Mic, Paperclip, Globe } from "lucide-react";

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
        "relative w-full max-w-[720px] overflow-hidden rounded-3xl border border-border bg-card shadow-lg transition-all hover:shadow-xl",
        className,
      )}
    >
      <div className="relative flex flex-col px-4 pt-4 pb-14 min-h-[120px]">
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          disabled={disabled || isLoading}
          rows={1}
          className={cn(
            "w-full resize-none bg-transparent px-2 py-2 text-[15px] leading-relaxed text-foreground placeholder:text-muted-foreground/60 focus:outline-none",
            "scrollbar-none",
          )}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              submit();
            }
          }}
        />

        {/* Bottom Toolbar */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-2xl bg-muted/30 p-2 backdrop-blur-sm">
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="Attach file"
            >
              <Paperclip className="h-4 w-4" />
            </button>
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="Voice input"
            >
              <Mic className="h-4 w-4" />
            </button>
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="Search web"
            >
              <Globe className="h-4 w-4" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] font-medium text-muted-foreground/50">
              {value.length}/2000
            </span>
            <button
              type="button"
              onClick={submit}
              disabled={disabled || isLoading || !value.trim()}
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-all hover:opacity-90 active:scale-95 disabled:pointer-events-none disabled:opacity-50",
              )}
            >
              {isLoading ? (
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
              ) : (
                <ArrowUp className="h-5 w-5 stroke-[2.5px]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Decorative gradient blur at bottom */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-background/5 to-transparent" />
    </div>
  );
}
