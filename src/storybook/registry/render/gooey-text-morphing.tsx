import React from 'react';
import * as Shared from '../shared-demos';
import GooeyTextMorphing from "@/components/jolyui/GooeyTextMorphing";

export default function Render(props: any) {
  return (
    <div
className="flex items-center justify-center"
style={{ height: 200 }}
>
<GooeyTextMorphing
texts={["Joly UI", "One-for-all", "Storybook"]}
morphTime={props?.duration ?? 1.2}
cooldownTime={props?.pauseDuration ?? 1.2}
className="text-foreground"
/>
</div>
  );
}