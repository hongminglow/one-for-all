import type { ComponentProps } from "react";
import React from 'react';
import * as Shared from '../shared-demos';
import TypewriterText from "@/components/jolyui/TypewriterText";

type RenderProps = ComponentProps<typeof TypewriterText>;

export default function Render(props: RenderProps) {
  return (
    <div
className="flex items-center justify-center"
style={{ height: 140 }}
>
<div className="text-[42px] font-black text-primary">
<TypewriterText
words={["Typewriter", "Animation", "Effect"]}
typingSpeed={props?.typingSpeed ?? 90}
deletingSpeed={props?.deletingSpeed ?? 50}
pauseDuration={props?.pauseDuration ?? 1200}
/>
</div>
</div>
  );
}