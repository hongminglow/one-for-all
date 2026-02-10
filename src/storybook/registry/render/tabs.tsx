import React from 'react';
import * as Shared from '../shared-demos';
import TabsPremium from "@/components/shadcn/TabsPremium";

type RenderProps = Record<string, unknown>;


export default function Render(props: RenderProps) {
  return (
    <div className="w-full py-10">
<TabsPremium
tabs={[
{ id: "1", label: "Analytics" },
{ id: "2", label: "Performance" },
{ id: "3", label: "Reports" },
]}
/>
</div>
  );
}