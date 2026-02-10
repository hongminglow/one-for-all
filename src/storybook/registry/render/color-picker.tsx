import React from 'react';
import * as Shared from '../shared-demos';
import ColorPicker from "@/components/shadcn/ColorPicker";

export default function Render(props: any) {
  return (
    <div className="w-full flex items-center justify-center p-10">
<ColorPicker />
</div>
  );
}