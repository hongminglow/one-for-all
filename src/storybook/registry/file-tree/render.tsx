import React from "react";
import * as Shared from "../shared-demos";
import FileTree, { type FileTreeNode } from "@/components/jolyui/FileTree";

export default function Render(props: any) {
	return (
		<div className="flex items-center justify-center" style={{ height: 300 }}>
			<FileTree tree={Shared.DEFAULT_FILE_TREE} />
		</div>
	);
}
