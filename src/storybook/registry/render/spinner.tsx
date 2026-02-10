import React from 'react';
import * as Shared from '../shared-demos';
import { Demo as Spinner } from "@/components/shadcn/Spinner";

export default function Render(props: any) {
  return (
    <div className="w-full flex items-center justify-center py-10 bg-black/20 rounded-2xl">
<Spinner />
</div>
  );
}