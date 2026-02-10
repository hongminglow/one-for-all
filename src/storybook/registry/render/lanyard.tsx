import type { ComponentProps } from "react";
import React from "react";
import * as Shared from "../shared-demos";
import Lanyard from "@/components/reactbits/Lanyard";

type RenderProps = Partial<ComponentProps<typeof Lanyard>>;

export default function Render(props: RenderProps) {
  const {
    position = [0, 0, 20],
    gravity = [0, -40, 0],
    fov = 20,
    transparent = true,
    ...rest
  } = props;

  return (
    <div className="w-full h-full min-h-[500px] bg-black rounded-xl overflow-hidden relative">
      <Lanyard
        position={position}
        gravity={gravity}
        fov={fov}
        transparent={transparent}
        {...rest}
      />
    </div>
  );
}
