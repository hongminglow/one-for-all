import type { ComponentProps } from "react";
import React from 'react';
import * as Shared from '../shared-demos';
import SparklesText from "@/components/magicui/SparklesText";

type RenderProps = ComponentProps<typeof SparklesText>;

export default function Render(props: RenderProps) {
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