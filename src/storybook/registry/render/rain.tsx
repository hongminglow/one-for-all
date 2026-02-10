import type { ComponentProps } from "react";
import React from "react";
import * as Shared from "../shared-demos";
import { Rain } from "@/components/shadcn/Rain";

type RenderProps = ComponentProps<typeof Rain>;

export default function Render(props: RenderProps) {
  return <Rain {...props} />;
}
