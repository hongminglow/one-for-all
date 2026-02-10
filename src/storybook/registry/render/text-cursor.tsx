import type { ComponentProps } from "react";
import React from "react";
import * as Shared from "../shared-demos";
import TextCursor from "@/components/reactbits/TextCursor";

type RenderProps = ComponentProps<typeof TextCursor>;

export default function Render(props: RenderProps) {
  return (
    <div className="w-full h-[320px] rounded-2xl bg-(--sb-panel) overflow-hidden">
      <TextCursor
        text={props?.text ?? "⚛️"}
        spacing={props?.spacing ?? 80}
        followMouseDirection={props?.followMouseDirection ?? true}
        randomFloat={props?.randomFloat ?? true}
        exitDuration={props?.exitDuration ?? 0.3}
        removalInterval={props?.removalInterval ?? 20}
        maxPoints={props?.maxPoints ?? 10}
        {...props}
      />
    </div>
  );
}
