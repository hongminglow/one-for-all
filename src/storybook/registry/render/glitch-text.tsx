import type { ComponentProps } from "react";
import React from "react";
import * as Shared from "../shared-demos";
import GlitchText from "@/components/reactbits/GlitchText";

type RenderProps = Partial<
  Omit<ComponentProps<typeof GlitchText>, "children">
> & {
  text?: string;
};

export default function Render(props: RenderProps) {
  const {
    speed = 1,
    enableShadows = true,
    enableOnHover = true,
    text = "GLITCH",
    className,
    ...rest
  } = props;

  const mergedClassName = [
    "text-[4rem] font-bold text-(--sb-text-strong)",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className="w-full min-h-[200px] rounded-2xl border border-[var(--sb-border-2)] bg-(--sb-panel) p-8 flex items-center justify-center"
      style={{ minHeight: 200 }}
    >
      <GlitchText
        speed={speed}
        enableShadows={enableShadows}
        enableOnHover={enableOnHover}
        className={mergedClassName}
        {...rest}
      >
        {text}
      </GlitchText>
    </div>
  );
}
