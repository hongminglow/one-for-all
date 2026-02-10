import React from 'react';
import * as Shared from '../shared-demos';
import { CopyButton } from "@/components/animate-ui/components/buttons/copy";

export default function Render(props: any) {
  return (
    <div
className="flex items-center justify-center"
style={{ height: 220 }}
>
<CopyButton content={props?.text ?? "npm install one-for-all"} />
</div>
  );
}