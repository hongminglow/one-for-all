import React from 'react';
import * as Shared from '../shared-demos';
import { ManagementBar } from "@/components/animate-ui/components/community/management-bar";

type RenderProps = Record<string, unknown>;


export default function Render(props: RenderProps) {
  return (
    <div
className="flex items-center justify-center"
style={{ height: 260 }}
>
<ManagementBar />
</div>
  );
}