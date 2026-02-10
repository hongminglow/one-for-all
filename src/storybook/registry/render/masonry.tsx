import React from 'react';
import * as Shared from '../shared-demos';
import Masonry from "@/components/reactbits/Masonry";

export default function Render(props: any) {
  return (
    <div className="w-full min-h-[600px] bg-[#111] rounded-xl border border-(--sb-border) p-4">
<Masonry
items={[
{
id: "1",
img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?q=80&w=500&auto=format",
url: "#",
height: 400,
},
{
id: "2",
img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?q=80&w=500&auto=format",
url: "#",
height: 300,
},
{
id: "3",
img: "https://images.unsplash.com/photo-1519681393784-d8e5b5a45771?q=80&w=500&auto=format",
url: "#",
height: 500,
},
{
id: "4",
img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=500&auto=format",
url: "#",
height: 350,
},
{
id: "5",
img: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=500&auto=format",
url: "#",
height: 450,
},
{
id: "6",
img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=500&auto=format",
url: "#",
height: 380,
},
{
id: "7",
img: "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?q=80&w=500&auto=format",
url: "#",
height: 520,
},
{
id: "8",
img: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=500&auto=format",
url: "#",
height: 400,
},
]}
stagger={props?.stagger ?? 0.05}
duration={props?.duration ?? 0.5}
{...props}
/>
</div>
  );
}