import React from 'react';
import * as Shared from '../shared-demos';
import CodeTabs from "@/components/shadcn/CodeTabs";

export default function Render(props: any) {
  return (
    <div className="w-full max-w-[620px]">
<CodeTabs
tabs={[
{
title: "npm",
code: "npm install one-for-all",
language: "bash",
},
{
title: "yarn",
code: "yarn add one-for-all",
language: "bash",
},
{
title: "pnpm",
code: "pnpm add one-for-all",
language: "bash",
},
]}
/>
</div>
  );
}