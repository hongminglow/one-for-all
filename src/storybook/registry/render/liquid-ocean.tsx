import type { ComponentProps } from "react";
import { LiquidOcean } from "@/components/vengenceui/LiquidOcean";

type RenderProps = ComponentProps<typeof LiquidOcean>;

export default function Render(props: RenderProps) {
  return (
    <div className="w-full h-[600px] relative rounded-xl overflow-hidden shadow-2xl">
      <LiquidOcean {...props} />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h2 className="text-white text-4xl font-black tracking-tighter drop-shadow-2xl">
          Vengeance
        </h2>
      </div>
    </div>
  );
}
