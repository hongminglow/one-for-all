import React from 'react';
import * as Shared from '../shared-demos';
import ExpandedMap from "@/components/jolyui/ExpandedMap";

export default function Render(props: any) {
  return (
    <div
className="flex items-center justify-center"
style={{ height: 320 }}
>
<ExpandedMap tileProvider={props?.tileProvider ?? "carto-light"} />
</div>
  );
}