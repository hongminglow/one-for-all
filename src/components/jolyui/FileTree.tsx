"use client";

import * as React from "react";

import { cn } from "@/lib/cn";

export type FileTreeNode =
  | { type: "file"; name: string }
  | { type: "folder"; name: string; children: FileTreeNode[] };

export interface FileTreeProps {
  tree: FileTreeNode[];
  className?: string;
}

function NodeView({ node, depth }: { node: FileTreeNode; depth: number }) {
  const [open, setOpen] = React.useState(true);

  if (node.type === "file") {
    return (
      <div
        className="flex items-center gap-2"
        style={{ paddingLeft: depth * 14 }}
      >
        <span className="text-[12px] text-[var(--sb-text-dim)]">•</span>
        <span className="text-[12px] font-semibold text-[var(--sb-text)]">
          {node.name}
        </span>
      </div>
    );
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 text-left"
        style={{ paddingLeft: depth * 14 }}
      >
        <span className="text-[11px] font-black text-[var(--sb-text-dim)]">
          {open ? "▾" : "▸"}
        </span>
        <span className="text-[12px] font-black text-[var(--sb-text-strong)]">
          {node.name}
        </span>
      </button>
      {open && (
        <div className="mt-1 space-y-1">
          {node.children.map((child, idx) => (
            <NodeView key={idx} node={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function FileTree({ tree, className }: FileTreeProps) {
  return (
    <div
      className={cn(
        "w-full max-w-[520px] rounded-2xl border border-[var(--sb-border-2)] bg-[var(--sb-card)] p-4",
        className,
      )}
    >
      <div className="text-[13px] font-black text-[var(--sb-text-strong)]">
        File Tree
      </div>
      <div className="mt-3 space-y-2">
        {tree.map((node, idx) => (
          <NodeView key={idx} node={node} depth={0} />
        ))}
      </div>
    </div>
  );
}
