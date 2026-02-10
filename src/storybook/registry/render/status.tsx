import React from 'react';
import * as Shared from '../shared-demos';
import StatusIndicator from "@/components/shadcn/StatusIndicator";

export default function Render(props: any) {
  return (
    <div className="w-full flex items-center justify-center py-10">
<StatusIndicator status={props?.status ?? "online"} />
</div>
  );
}