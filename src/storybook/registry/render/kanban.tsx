import React from 'react';
import * as Shared from '../shared-demos';
import Kanban from "@/components/shadcn/Kanban";

type RenderProps = Record<string, unknown>;


export default function Render(props: RenderProps) {
  return (
    <div className="w-full max-w-[900px]">
<Kanban />
</div>
  );
}