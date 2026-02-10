import React from 'react';
import * as Shared from '../shared-demos';

export default function Render(props: any) {
  return (
    <div
className="flex items-center justify-center"
style={{ height: 220 }}
>
<Shared.FlipButton variant="outline">
<Shared.FlipButtonFront>{props?.frontText ?? "Hover me"}</Shared.FlipButtonFront>
<Shared.FlipButtonBack>{props?.backText ?? "Nice"}</Shared.FlipButtonBack>
</Shared.FlipButton>
</div>
  );
}