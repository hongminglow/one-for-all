import type { ComponentProps } from "react";
import React from 'react';
import * as Shared from '../shared-demos';

type RenderProps = ComponentProps<typeof Shared.CompactConfettiDemo>;

export default function Render(props: RenderProps) {
  return (
    <Shared.CompactConfettiDemo
particleCount={props?.particleCount ?? 120}
spread={props?.spread ?? 70}
/>
  );
}