export const code = `"use client";

import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import { cn } from "@/lib/utils";

interface CodeEditorProps {
  code: string;
  language?: string;
  filename?: string;
  className?: string;
  typingAnimation?: boolean;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  code,
  language = "javascript",
  filename = "Untitled",
  className,
  typingAnimation = true,
}) => {
  const [displayedCode, setDisplayedCode] = useState(
    typingAnimation ? "" : code,
  );

  useEffect(() => {
    if (typingAnimation) {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayedCode(code.substring(0, i));
        i++;
        if (i > code.length) clearInterval(interval);
      }, 30);
      return () => clearInterval(interval);
    }
  }, [code, typingAnimation]);

  useEffect(() => {
    Prism.highlightAll();
  }, [displayedCode, language]);

  return (
    <div
      className={cn(
        "rounded-xl border border-(--sb-border) bg-[#1e1e1e] shadow-2xl",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
          <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="ml-4 text-xs font-medium text-white/50">{filename}</div>
      </div>
      <div className="p-4 font-mono text-sm leading-relaxed text-white">
        <pre>
          <code className={\`language-\${language}\`}>{displayedCode}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeEditor;
`;
