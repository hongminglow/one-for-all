import React from 'react';
import * as Shared from '../shared-demos';
import Dock from "@/components/reactbits/Dock";

export default function Render(props: any) {
  return (
    <div className="w-full min-h-80 bg-(--sb-bg) rounded-xl border border-(--sb-border) relative overflow-hidden">
<Dock
items={[
{
icon: (
<span className="text-[22px] leading-none text-white">
🏠
</span>
),
label: "Home",
onClick: () => {},
},
{
icon: (
<span className="text-[22px] leading-none text-white">
🔍
</span>
),
label: "Search",
onClick: () => {},
},
{
icon: (
<span className="text-[22px] leading-none text-white">
📁
</span>
),
label: "Files",
onClick: () => {},
},
{
icon: (
<span className="text-[22px] leading-none text-white">
⚙️
</span>
),
label: "Settings",
onClick: () => {},
},
]}
magnification={props?.magnification ?? 70}
distance={props?.distance ?? 200}
panelHeight={props?.panelHeight ?? 68}
dockHeight={props?.dockHeight ?? 256}
baseItemSize={props?.baseItemSize ?? 50}
{...props}
/>
</div>
  );
}