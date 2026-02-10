import type { ComponentProps } from "react";
import React from "react";
import * as Shared from "../shared-demos";
import AIPromptBox from "@/components/jolyui/AIPromptBox";

type RenderProps = ComponentProps<typeof AIPromptBox>;

export default function Render(props: RenderProps) {
  return (
    <div
      className="flex items-center justify-center px-4"
      style={{ height: 240 }}
    >
      <AIPromptBox
        placeholder={props?.placeholder ?? "Ask me anything…"}
        isLoading={props?.isLoading ?? false}
        onSubmit={() => {}}
      />
    </div>
  );
}
