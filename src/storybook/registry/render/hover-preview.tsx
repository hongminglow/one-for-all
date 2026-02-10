import React from 'react';
import * as Shared from '../shared-demos';

export default function Render(props: any) {
  return (
    <div
className="flex items-center justify-center"
style={{ height: 260 }}
>
<Shared.HoverPreviewDemo />
</div>
  );
}