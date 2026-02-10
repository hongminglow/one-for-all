import type { ComponentProps } from "react";
import React from "react";
import * as Shared from "../shared-demos";
import Rating from "@/components/shadcn/Rating";

type RenderProps = ComponentProps<typeof Rating>;

export default function Render(props: RenderProps) {
  return (
    <div className="w-full flex items-center justify-center py-10">
      <Rating
        count={props?.count ?? 5}
        initialValue={props?.initialValue ?? 3}
        icon={props?.icon ?? "star"}
        activeColor={props?.activeColor ?? "#facc15"}
      />
    </div>
  );
}
