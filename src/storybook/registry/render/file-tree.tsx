import React from "react";
import * as Shared from "../shared-demos";
import FileTree, { type FileTreeNode } from "@/components/jolyui/FileTree";

type RenderProps = Record<string, unknown>;

export default function Render(props: RenderProps) {
  return (
    <div className="flex items-center justify-center" style={{ height: 300 }}>
      <FileTree tree={Shared.DEFAULT_FILE_TREE} />
    </div>
  );
}
