import React from "react";
import * as Shared from "../shared-demos";
import Banner from "@/components/shadcn/Banner";

type RenderProps = Record<string, unknown>;

export default function Render(props: RenderProps) {
  return (
    <div className="w-full py-10">
      <Banner
        title="New v4.0 is out!"
        description="Explore the latest features and improved performance."
        cta="What's new"
      />
    </div>
  );
}
