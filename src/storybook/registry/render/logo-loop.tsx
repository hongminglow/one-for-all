import React from 'react';
import * as Shared from '../shared-demos';
import LogoLoop from "@/components/reactbits/LogoLoop";

const techLogos = [
  { src: "/logo.svg", alt: "One for all" },
  { src: "/logo.svg", alt: "Components" },
  { src: "/logo.svg", alt: "Storybook" },
  { src: "/logo.svg", alt: "React" },
  { src: "/logo.svg", alt: "Next.js" },
  { src: "/logo.svg", alt: "Tailwind" },
];

export default function Render(props: any) {
  return (
    <div className="flex items-center justify-center w-full min-h-[160px] p-4 bg-(--sb-bg) rounded-2xl border border-(--sb-border)">
<LogoLoop
logos={techLogos}
speed={props?.speed ?? 100}
direction={props?.direction ?? "left"}
logoHeight={props?.logoHeight ?? 40}
gap={props?.gap ?? 40}
hoverSpeed={props?.hoverSpeed ?? 0}
scaleOnHover={props?.scaleOnHover ?? true}
fadeOut={props?.fadeOut ?? true}
{...props}
/>
</div>
  );
}