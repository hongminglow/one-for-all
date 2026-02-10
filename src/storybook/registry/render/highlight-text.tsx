import React from 'react';
import * as Shared from '../shared-demos';
import { HighlightText } from "@/components/ui/highlight-text";

type RenderProps = Record<string, unknown>;


export default function Render(props: RenderProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20">
<h1 className="max-w-2xl text-center font-bold text-4xl leading-relaxed tracking-tight">
Make your text <HighlightText>stand out</HighlightText> with
animated highlights.
</h1>
</div>
  );
}