import type { ComponentProps } from "react";
import React from "react";
import * as Shared from "../shared-demos";
import { CopyButton } from "@/components/animate-ui/components/buttons/copy";

type RenderProps = Partial<ComponentProps<typeof CopyButton>>;

export default function Render(props: RenderProps) {
  const { content, ...rest } = props;

  return (
    <div className="flex items-center justify-center" style={{ height: 220 }}>
      <CopyButton content={content ?? "npm install one-for-all"} {...rest} />
    </div>
  );
}
