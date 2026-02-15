import type { ComponentProps } from "react";
import LiquidText from "@/components/vengenceui/LiquidText";

type RenderProps = ComponentProps<typeof LiquidText>;

export default function Render(props: RenderProps) {
  return (
    <div className="w-full h-[500px] flex items-center justify-center bg-transparent">
      <LiquidText {...props} />
    </div>
  );
}
