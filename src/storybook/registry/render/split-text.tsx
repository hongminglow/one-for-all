import type { ComponentProps } from "react";
import React from "react";
import * as Shared from "../shared-demos";
import SplitText from "@/components/reactbits/SplitText";

type RenderProps = ComponentProps<typeof SplitText>;

export default function Render(props: RenderProps) {
  return (
    <SplitText
      text="Elevate Your Web Experience"
      className="text-[32px] font-black text-center leading-tight text-(--sb-text-strong)"
      delay={50}
      animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
      animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
      easing="easeOutCubic"
      threshold={0.2}
      rootMargin="-50px"
      {...props}
    />
  );
}
