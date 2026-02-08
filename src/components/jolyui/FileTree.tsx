"use client";

import * as React from "react";
import { Folder, File, ChevronRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

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
        className="flex items-center gap-2 py-1 hover:bg-muted/50 rounded-md px-2 cursor-default transition-colors"
        style={{ paddingLeft: depth * 16 + 8 }}
      >
        <File className="w-4 h-4 text-muted-foreground" />
        <span className="text-sm font-medium text-foreground">{node.name}</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 py-1 hover:bg-muted/50 rounded-md px-2 text-left transition-colors"
        style={{ paddingLeft: depth * 16 + 8 }}
      >
        {open ? (
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        ) : (
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
        )}
        <Folder className="w-4 h-4 text-primary" />
        <span className="text-sm font-bold text-foreground">{node.name}</span>
      </button>
      {open && (
        <div className="flex flex-col">
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
        "w-full rounded-2xl border border-border bg-card p-4 shadow-sm",
        className,
      )}
    >
      <div className="flex flex-col gap-1">
        {tree.map((node, idx) => (
          <NodeView key={idx} node={node} depth={0} />
        ))}
      </div>
    </div>
  );
}
