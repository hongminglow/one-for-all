import React from 'react';
import * as Shared from '../shared-demos';
import { Compare } from "@/components/ui/compare";

type RenderProps = Record<string, unknown>;


export default function Render(props: RenderProps) {
  return (
    <div className="p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800 px-4">
<Compare
firstImage="https://assets.aceternity.com/code-problem.png"
secondImage="https://assets.aceternity.com/code-solution.png"
firstImageClassName="object-cover object-left-top"
secondImageClassname="object-cover object-left-top"
className="h-[250px] md:h-[500px] w-[600px] justify-self-center"
slideMode="hover"
/>
</div>
  );
}