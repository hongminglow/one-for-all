import React from 'react';
import * as Shared from '../shared-demos';
import { Demo as ImageCrop } from "@/components/shadcn/ImageCrop";

type RenderProps = Record<string, unknown>;


export default function Render(props: RenderProps) {
  return (
    <div className="w-full">
<ImageCrop />
</div>
  );
}