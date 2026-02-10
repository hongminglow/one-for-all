import React from 'react';
import * as Shared from '../shared-demos';
import Lanyard from "@/components/reactbits/Lanyard";

export default function Render(props: any) {
  return (
    <div className="w-full h-full min-h-[500px] bg-black rounded-xl overflow-hidden relative">
<Lanyard
position={props?.position ?? [0, 0, 20]}
gravity={props?.gravity ?? [0, -40, 0]}
fov={props?.fov ?? 20}
bandColor={props?.bandColor ?? "white"}
cardColor={props?.cardColor ?? "white"}
cardGLB={
props?.cardGLB ?? "https://reactbits.dev/assets/3d/card.glb"
}
cardTexture={props?.cardTexture}
{...props}
/>
</div>
  );
}