import type { ComponentProps } from "react";
import React from 'react';
import * as Shared from '../shared-demos';
import { Fireworks } from "@/components/shadcn/Fireworks";

type RenderProps = ComponentProps<typeof Fireworks>;


export default function Render(props: RenderProps) {
  return (
    <Fireworks {...props} />
  );
}