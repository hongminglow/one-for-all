import React from 'react';
import * as Shared from '../shared-demos';

export default function Render(props: any) {
  return (
    <Shared.AnimatedBeamDemo
curvature={props?.curvature ?? 0.2}
duration={props?.duration ?? 2}
reverse={props?.reverse ?? false}
/>
  );
}