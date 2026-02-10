import React from 'react';
import * as Shared from '../shared-demos';
import LaserFlow from "@/components/reactbits/LaserFlow";

export default function Render(props: any) {
  return (
    // <div className="relative w-full h-[400px] bg-black overflow-hidden rounded-xl border border-(--sb-border)">
//   <LaserFlow
//     color={props?.color ?? "#FF79C6"}
//     wispDensity={props?.wispDensity ?? 2}
//     fogIntensity={props?.fogIntensity ?? 0.45}
//     horizontalSizing={props?.horizontalSizing ?? 0.5}
//     verticalSizing={props?.verticalSizing ?? 2.0}
//     wispSpeed={props?.wispSpeed ?? 15.0}
//     {...props}
//   />
//   <div className="absolute inset-x-0 bottom-0 p-6 bg-linear-to-t from-black/80 to-transparent pointer-events-none">
//     <h3 className="text-white text-lg font-bold">Laser Flow</h3>
//     <p className="text-white/60 text-sm">
//       Shader-based volumetric laser effect
//     </p>
//   </div>
// </div>
<div
style={{ height: "300px", position: "relative", overflow: "hidden" }}
>
<LaserFlow />
</div>
  );
}