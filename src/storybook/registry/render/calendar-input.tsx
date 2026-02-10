import React from 'react';
import * as Shared from '../shared-demos';
import CalendarInput from "@/components/jolyui/CalendarInput";

type RenderProps = Record<string, unknown>;


export default function Render(props: RenderProps) {
  return (
    <div className="flex items-center justify-center p-8 min-h-[400px]">
<CalendarInput />
</div>
  );
}