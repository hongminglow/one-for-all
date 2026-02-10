import type { ComponentProps } from "react";
import React from 'react';
import * as Shared from '../shared-demos';
import { Meteors } from "@/components/shadcn/Meteors";

type RenderProps = ComponentProps<typeof Meteors>;


export default function Render(props: RenderProps) {
  return (
    <Meteors {...props} />
  );
}