import type { ComponentProps } from "react";
import React from 'react';
import * as Shared from '../shared-demos';

type RenderProps = ComponentProps<typeof Shared.AnimatedBeamDemo>;

export default function Render(props: RenderProps) {
  return (
    <Shared.AnimatedBeamDemo
curvature={props?.curvature ?? 0.2}
duration={props?.duration ?? 2}
reverse={props?.reverse ?? false}
/>
  );
}