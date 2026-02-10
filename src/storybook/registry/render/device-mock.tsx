import React from 'react';
import * as Shared from '../shared-demos';
import AndroidMock from "@/components/shadcn/AndroidMock";

type RenderProps = Record<string, unknown>;


export default function Render(props: RenderProps) {
  return (
    <div className="w-full flex items-center justify-center p-8">
<AndroidMock />
</div>
  );
}