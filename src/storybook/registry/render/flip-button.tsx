import type { ComponentProps, ReactNode } from "react";
import React from "react";
import * as Shared from "../shared-demos";

type RenderProps = Partial<
  Omit<ComponentProps<typeof Shared.FlipButton>, "children" | "asChild">
> & {
  frontText?: ReactNode;
  backText?: ReactNode;
};

export default function Render(props: RenderProps) {
  const {
    frontText = "Hover me",
    backText = "Nice",
    variant = "outline",
    ...rest
  } = props;

  return (
    <div className="flex items-center justify-center" style={{ height: 220 }}>
      <Shared.FlipButton variant={variant} {...rest}>
        <Shared.FlipButtonFront>{frontText}</Shared.FlipButtonFront>
        <Shared.FlipButtonBack>{backText}</Shared.FlipButtonBack>
      </Shared.FlipButton>
    </div>
  );
}
