import type { ComponentProps } from "react";
import RevealLoader from "@/components/ui/reveal-loader";

type RenderProps = ComponentProps<typeof RevealLoader>;

export default function Render(props: RenderProps) {
  return (
    <div className="w-full h-[400px] flex items-center justify-center bg-black rounded-xl">
      <RevealLoader
        text="VENGEANCE"
        bgColors={["#0f172a", "#334155"]}
        staggerOrder="center-out"
        textFadeDelay={0.5}
      />
    </div>
  );
}
