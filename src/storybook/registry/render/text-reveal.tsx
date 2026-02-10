import React from "react";
import * as Shared from "../shared-demos";
import { TextReveal } from "@/components/magicui/TextReveal";

type RenderProps = Record<string, unknown>;

export default function Render(props: RenderProps) {
  return <TextReveal>Magic UI will change the way you designs.</TextReveal>;
}
