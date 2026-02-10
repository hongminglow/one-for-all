import type { ComponentProps } from "react";
import React from "react";
import * as Shared from "../shared-demos";
import Stepper, { Step } from "@/components/reactbits/Stepper";

type RenderProps = ComponentProps<typeof Stepper>;

export default function Render(props: RenderProps) {
  return (
    <div className="w-full">
      <Stepper
        initialStep={props?.initialStep ?? 1}
        disableStepIndicators={props?.disableStepIndicators ?? false}
        {...props}
      >
        <Step>
          <div className="text-[16px] font-black text-white">Step 1</div>
          <div className="mt-2 text-[12px] font-medium text-white/70">
            Intro content.
          </div>
        </Step>
        <Step>
          <div className="text-[16px] font-black text-white">Step 2</div>
          <div className="mt-2 text-[12px] font-medium text-white/70">
            More details.
          </div>
        </Step>
        <Step>
          <div className="text-[16px] font-black text-white">Step 3</div>
          <div className="mt-2 text-[12px] font-medium text-white/70">
            Finish.
          </div>
        </Step>
      </Stepper>
    </div>
  );
}
