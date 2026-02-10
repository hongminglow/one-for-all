import type { ComponentProps } from "react";
import React from 'react';
import * as Shared from '../shared-demos';
import Ballpit from "@/components/reactbits/Ballpit";

type RenderProps = ComponentProps<typeof Ballpit>;

export default function Render(props: RenderProps) {
  return (
    <div
style={{
position: "relative",
overflow: "hidden",
minHeight: "500px",
maxHeight: "500px",
width: "100%",
}}
>
<Ballpit
count={props?.count ?? 100}
gravity={props?.gravity ?? 0.01}
friction={props?.friction ?? 0.9975}
wallBounce={props?.wallBounce ?? 0.95}
followCursor={props?.followCursor ?? false}
/>
</div>
  );
}