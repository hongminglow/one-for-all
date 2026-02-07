"use client";

import * as React from "react";
import { FileIcon } from "lucide-react";

import { cn } from "@/lib/utils";

export interface CodeComparisonProps {
  beforeCode: string;
  afterCode: string;
  language?: string;
  filename?: string;
  highlightColor?: string;
  className?: string;
}

function splitLines(code: string) {
  return code.replace(/\r\n/g, "\n").split("\n");
}

export default function CodeComparison({
  beforeCode,
  afterCode,
  filename = "example.ts",
  highlightColor = "#ff3333",
  className,
}: CodeComparisonProps) {
  const beforeLines = React.useMemo(() => splitLines(beforeCode), [beforeCode]);
  const afterLines = React.useMemo(() => splitLines(afterCode), [afterCode]);
  const max = Math.max(beforeLines.length, afterLines.length);

  return (
    <div className={cn("mx-auto w-full max-w-5xl", className)}>
      <div
        className="border-border relative w-full overflow-hidden rounded-md border"
        style={{ "--highlight-color": highlightColor } as React.CSSProperties}
      >
        <div className="relative grid md:grid-cols-2">
          <div className="border-primary/20 md:border-r">
            <div className="border-primary/20 bg-accent text-foreground flex items-center border-b p-2 text-sm">
              <FileIcon className="mr-2 h-4 w-4" />
              {filename}
              <span className="ml-auto hidden md:block">before</span>
            </div>
            <pre className="bg-background h-full w-full overflow-auto font-mono text-xs">
              {Array.from({ length: max }).map((_, i) => {
                const line = beforeLines[i] ?? "";
                const other = afterLines[i] ?? "";
                const changed = line !== other;
                return (
                  <div
                    key={i}
                    className={cn(
                      "flex px-4 py-0.5",
                      changed &&
                        "bg-[color-mix(in_oklab,var(--highlight-color)_20%,transparent)]",
                    )}
                  >
                    <span className="mr-4 select-none text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <code className="whitespace-pre">{line}</code>
                  </div>
                );
              })}
            </pre>
          </div>
          <div className="border-primary/20 border-t md:border-t-0">
            <div className="border-primary/20 bg-accent text-foreground flex items-center border-b p-2 text-sm">
              <FileIcon className="mr-2 h-4 w-4" />
              {filename}
              <span className="ml-auto hidden md:block">after</span>
            </div>
            <pre className="bg-background h-full w-full overflow-auto font-mono text-xs">
              {Array.from({ length: max }).map((_, i) => {
                const line = afterLines[i] ?? "";
                const other = beforeLines[i] ?? "";
                const changed = line !== other;
                return (
                  <div
                    key={i}
                    className={cn(
                      "flex px-4 py-0.5",
                      changed && "bg-[rgba(16,185,129,.12)]",
                    )}
                  >
                    <span className="mr-4 select-none text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <code className="whitespace-pre">{line}</code>
                  </div>
                );
              })}
            </pre>
          </div>
        </div>
        <div className="border-primary/20 bg-accent text-foreground absolute left-1/2 top-1/2 hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-md border text-xs md:flex">
          VS
        </div>
      </div>
    </div>
  );
}
