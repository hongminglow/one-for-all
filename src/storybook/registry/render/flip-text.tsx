import type { ComponentProps } from "react";
import { FlipText } from "@/components/vengenceui/FlipText";

type RenderProps = ComponentProps<typeof FlipText>;

export default function Render(props: RenderProps) {
  return (
    <div className="w-full flex items-center justify-center py-20 bg-neutral-900 rounded-xl">
      <FlipText
        className="text-6xl font-black text-white uppercase tracking-tighter"
        {...props}
      >
        {props.children || "Vengeance UI"}
      </FlipText>
    </div>
  );
}
