import type { ComponentProps } from "react";
import React from 'react';
import * as Shared from '../shared-demos';
import { Confetti } from "@/components/shadcn/Confetti";

type RenderProps = ComponentProps<typeof Confetti>;


export default function Render(props: RenderProps) {
  return (
    <Confetti {...props} />
  );
}