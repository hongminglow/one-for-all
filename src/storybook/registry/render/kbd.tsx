import React from 'react';
import * as Shared from '../shared-demos';
import Kbd from "@/components/shadcn/Kbd";

export default function Render(props: any) {
  return (
    <div className="w-full py-10">
<Kbd keys={["COMMAND", "K"]} />
</div>
  );
}