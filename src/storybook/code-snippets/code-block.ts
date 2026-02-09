export const code = `"use client";

import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
  language?: string;
  code: string;
  filename?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  language = "javascript",
  code,
  filename,
}) => {
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, [code, language]);

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-[var(--sb-border)] bg-[#1e1e1e] text-white">
      {filename && (
        <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-2">
          <span className="text-xs font-medium text-white/70">{filename}</span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 rounded bg-white/10 px-2 py-1 text-xs font-medium text-white/80 transition hover:bg-white/20 hover:text-white"
          >
            {copied ? (
              <>
                <Check className="h-3 w-3" />
                Copied
              </>
            ) : (
              <>
                <Copy className="h-3 w-3" />
                Copy
              </>
            )}
          </button>
        </div>
      )}
      {!filename && (
        <button
          onClick={handleCopy}
          className="absolute right-3 top-3 z-10 flex items-center gap-1.5 rounded bg-white/10 px-2 py-1 text-xs font-medium text-white/80 transition hover:bg-white/20 hover:text-white"
        >
          {copied ? (
            <Check className="h-3 w-3" />
          ) : (
            <Copy className="h-3 w-3" />
          )}
        </button>
      )}
      <div className="overflow-auto p-4">
        <pre>
          <code className={\`language-\${language}\`}>{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
`;
