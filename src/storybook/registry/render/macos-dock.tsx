import React from 'react';
import * as Shared from '../shared-demos';
import MacOSDock from "@/components/shadcn/MacOSDock";

export default function Render(props: any) {
  return (
    <div className="w-full bg-linear-to-t from-black/20 to-transparent pt-20">
<MacOSDock />
</div>
  );
}