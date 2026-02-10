import type { ComponentProps } from "react";
import React from "react";
import * as Shared from "../shared-demos";
import LetterGlitch from "@/components/reactbits/LetterGlitch";

type RenderProps = ComponentProps<typeof LetterGlitch>;

export default function Render(props: RenderProps) {
  return (
    <div className="relative h-[220px] w-full overflow-hidden rounded-2xl border border-[var(--sb-border-2)] bg-(--sb-bg)">
      <LetterGlitch
        glitchColors={props?.glitchColors ?? ["#2b4539", "#61dca3", "#61b3dc"]}
        glitchSpeed={props?.glitchSpeed ?? 50}
        centerVignette={props?.centerVignette ?? false}
        outerVignette={props?.outerVignette ?? true}
        smooth={props?.smooth ?? true}
        characters={
          props?.characters ??
          "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789"
        }
        {...props}
      />
    </div>
  );
}
