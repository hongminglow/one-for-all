import React from 'react';
import * as Shared from '../shared-demos';
import QrCode from "@/components/shadcn/QrCode";

type RenderProps = Record<string, unknown>;


export default function Render(props: RenderProps) {
  return (
    <div className="w-full py-10">
<QrCode />
</div>
  );
}