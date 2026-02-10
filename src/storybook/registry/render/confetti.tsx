import React from 'react';
import * as Shared from '../shared-demos';
import { Confetti } from "@/components/shadcn/Confetti";

export default function Render(props: any) {
  return (
    <Confetti {...props} />
  );
}