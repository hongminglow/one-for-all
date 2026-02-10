import React from 'react';
import * as Shared from '../shared-demos';
import Tags from "@/components/shadcn/Tags";

type RenderProps = Record<string, unknown>;


export default function Render(props: RenderProps) {
  return (
    <div className="w-full py-10">
<Tags />
</div>
  );
}