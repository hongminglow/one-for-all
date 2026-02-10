import type { ComponentProps } from "react";
import React from "react";
import * as Shared from "../shared-demos";
import ElasticSlider from "@/components/reactbits/ElasticSlider";

type RenderProps = ComponentProps<typeof ElasticSlider>;

export default function Render(props: RenderProps) {
  return (
    <div className="w-full flex items-center justify-center relative min-h-[220px]">
      <ElasticSlider
        defaultValue={props?.defaultValue ?? 50}
        startingValue={props?.startingValue ?? 0}
        maxValue={props?.maxValue ?? 100}
        isStepped={props?.isStepped ?? false}
        stepSize={props?.stepSize ?? 1}
        {...props}
      />
    </div>
  );
}
