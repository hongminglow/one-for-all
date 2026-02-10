import React from 'react';
import * as Shared from '../shared-demos';
import AnimatedThemeToggle from "@/components/jolyui/AnimatedThemeToggle";

export default function Render(props: any) {
  return (
    <div
className="flex items-center justify-center"
style={{ height: 140 }}
>
<AnimatedThemeToggle />
</div>
  );
}