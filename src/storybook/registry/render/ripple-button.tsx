import React from 'react';
import * as Shared from '../shared-demos';

export default function Render(props: any) {
  return (
    <div
className="flex items-center justify-center"
style={{ height: 220 }}
>
<Shared.RippleButton variant="outline">
Click
<Shared.RippleButtonRipples />
</Shared.RippleButton>
</div>
  );
}