import type { ComponentProps } from "react";
import React from "react";
import * as Shared from "../shared-demos";
import ScrollVelocity from "@/components/reactbits/ScrollVelocity";

type RenderProps = Partial<ComponentProps<typeof ScrollVelocity>>;

export default function Render(props: RenderProps) {
  const {
    texts = ["React Bits", "Scroll Velocity"],
    velocity = 100,
    className,
    ...rest
  } = props;

  const mergedClassName = [
    "custom-scroll-text text-(--sb-text-strong)",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className="w-full min-h-[300px] rounded-2xl border border-[var(--sb-border-2)] bg-(--sb-panel) p-4 flex flex-col justify-center overflow-hidden"
      style={{ minHeight: 300 }}
    >
      <ScrollVelocity
        texts={texts}
        velocity={velocity}
        className={mergedClassName}
        {...rest}
      />
    </div>
  );
}
