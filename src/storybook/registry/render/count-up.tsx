import type { ComponentProps } from "react";
import React from "react";
import * as Shared from "../shared-demos";
import CountUp from "@/components/reactbits/CountUp";

type RenderProps = Partial<ComponentProps<typeof CountUp>>;

export default function Render(props: RenderProps) {
  const { from, to, separator, direction, duration, className, ...rest } =
    props;

  return (
    <div className="flex h-full min-h-[200px] w-full items-center justify-center">
      <CountUp
        {...rest}
        from={from ?? 0}
        to={to ?? 100}
        separator={separator ?? ","}
        direction={direction ?? "up"}
        duration={duration ?? 1}
        className={`text-[64px] font-black text-(--sb-text-strong) ${className ?? ""}`}
      />
    </div>
  );
}
