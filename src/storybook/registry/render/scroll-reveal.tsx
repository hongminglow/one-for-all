import type { ComponentProps } from "react";
import React from 'react';
import * as Shared from '../shared-demos';

type RenderProps = ComponentProps<typeof Shared.ScrollRevealWrapper>;


export default function Render(props: RenderProps) {
  return (
    <Shared.ScrollRevealWrapper {...props} />
  );
}