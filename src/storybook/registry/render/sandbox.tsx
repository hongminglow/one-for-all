import React, { useEffect, useState } from "react";
import {
	SandboxCodeEditor,
	SandboxLayout,
	SandboxPreview,
	SandboxProvider,
	SandboxTabs,
	SandboxTabsContent,
	SandboxTabsList,
	SandboxTabsTrigger,
} from "@/components/shadcn/Sandbox";

type RenderProps = Record<string, unknown>;

export default function Render(props: RenderProps) {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return <div className="fixed inset-0 bg-muted/50 animate-pulse" />;
	}

	return (
		<div className="absolute inset-0 p-4">
			<SandboxProvider
				template="react"
				files={{
					"/App.js": `export default function App() {
  return (
    <div className="app">
      <h1>Hello Sandbox!</h1>
      <p>Start editing to see changes.</p>
    </div>
  );
}`,
					"/styles.css": `body {
  font-family: system-ui, sans-serif;
  padding: 20px;
}

.app {
  text-align: center;
}

h1 {
  color: #333;
}`,
				}}
			>
				<SandboxTabs defaultValue="code" className="h-full">
					<SandboxTabsList>
						<SandboxTabsTrigger value="code">Code</SandboxTabsTrigger>
						<SandboxTabsTrigger value="preview">Preview</SandboxTabsTrigger>
					</SandboxTabsList>
					<SandboxTabsContent value="code">
						<SandboxLayout>
							<SandboxCodeEditor showTabs />
						</SandboxLayout>
					</SandboxTabsContent>
					<SandboxTabsContent value="preview">
						<SandboxLayout>
							<SandboxPreview />
						</SandboxLayout>
					</SandboxTabsContent>
				</SandboxTabs>
			</SandboxProvider>
		</div>
	);
}
