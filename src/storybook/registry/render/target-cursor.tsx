import React from 'react';
import * as Shared from '../shared-demos';
import TargetCursor from "@/components/reactbits/TargetCursor";

export default function Render(props: any) {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[300px] p-8 space-y-8 bg-(--sb-bg)">
<TargetCursor
targetSelector=".cursor-target"
spinDuration={props?.spinDuration ?? 2}
hideDefaultCursor={props?.hideDefaultCursor ?? true}
hoverDuration={props?.hoverDuration ?? 0.2}
parallaxOn={props?.parallaxOn ?? true}
{...props}
/>
<h2 className="text-xl font-bold text-(--sb-text-strong)">
Hover over elements to see the cursor lock in!
</h2>
<div className="flex flex-wrap justify-center gap-4">
<button className="cursor-target px-6 py-3 bg-[var(--sb-accent)] text-white rounded-lg font-bold">
Button Target
</button>
<div className="cursor-target w-32 h-32 flex items-center justify-center bg-(--sb-card) border border-(--sb-border) rounded-xl text-(--sb-text-muted) text-center p-4">
Div Target
</div>
<input
type="text"
className="cursor-target px-4 py-2 bg-[var(--sb-input-bg)] border border-(--sb-border) rounded-md"
placeholder="Input Target"
/>
</div>
<p className="text-sm text-(--sb-text-muted) text-center max-w-md">
The Target Cursor is fixed-position. When it hovers over elements
matching the <code>targetSelector</code>, its corners snap to the
element&apos;s bounds.
</p>
</div>
  );
}