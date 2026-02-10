import type { ComponentProps } from "react";
import React from "react";
import * as Shared from "../shared-demos";
import { Snow } from "@/components/shadcn/Snow";

type RenderProps = ComponentProps<typeof Snow>;

export default function Render(props: RenderProps) {
  return <Snow {...props} />;
}
