import React from 'react';
import * as Shared from '../shared-demos';
import PinList from "@/components/shadcn/PinList";

export default function Render(props: any) {
  return (
    <div className="w-full flex items-center justify-center py-10">
<PinList />
</div>
  );
}