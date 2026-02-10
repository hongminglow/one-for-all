import React from 'react';
import * as Shared from '../shared-demos';
import SparklesText from "@/components/magicui/SparklesText";

export default function Render(props: any) {
  return (
    <div
className="flex items-center justify-center"
style={{ height: 220 }}
>
<SparklesText sparklesCount={props?.sparklesCount ?? 10}>
Sparkles
</SparklesText>
</div>
  );
}