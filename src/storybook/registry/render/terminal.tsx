import React from 'react';
import * as Shared from '../shared-demos';
import Terminal from "@/components/shadcn/Terminal";

type RenderProps = Record<string, unknown>;


export default function Render(props: RenderProps) {
  return (
    <div className="w-full py-10">
<Terminal
commands={[
{
command: "npm install @shadcn/ui",
output: [
"Checking registries...",
"Resolving dependencies...",
"Installed 15 components.",
],
},
{
command: "npm run dev",
output: "Starting development server at http://localhost:3000",
},
]}
/>
</div>
  );
}