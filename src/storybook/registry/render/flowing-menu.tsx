import React from 'react';
import * as Shared from '../shared-demos';
import FlowingMenu from "@/components/reactbits/FlowingMenu";

export default function Render(props: any) {
  return (
    <div className="w-full h-[360px] rounded-xl overflow-hidden border border-(--sb-border)">
<FlowingMenu
items={
props?.items ?? [
{
link: "#",
text: "React Bits",
image:
"https://images.unsplash.com/photo-1526481280695-3c687fd643ed?q=80&w=800&auto=format",
},
{
link: "#",
text: "Components",
image:
"https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format",
},
{
link: "#",
text: "Backgrounds",
image:
"https://images.unsplash.com/photo-1519681393784-d8e5b5a45771?q=80&w=800&auto=format",
},
]
}
speed={props?.speed ?? 15}
textColor={props?.textColor ?? "#ffffff"}
bgColor={props?.bgColor ?? "#060010"}
marqueeBgColor={props?.marqueeBgColor ?? "#ffffff"}
marqueeTextColor={props?.marqueeTextColor ?? "#060010"}
borderColor={props?.borderColor ?? "#ffffff"}
{...props}
/>
</div>
  );
}