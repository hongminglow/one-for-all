import React from "react";
import * as Shared from "../shared-demos";
import { RadialIntro } from "@/components/animate-ui/components/community/radial-intro";

type RenderProps = Record<string, unknown>;

export default function Render(props: RenderProps) {
  return (
    <div className="flex justify-center items-center">
      <RadialIntro orbitItems={Shared.RADIAL_ITEMS} />
    </div>
  );
}
