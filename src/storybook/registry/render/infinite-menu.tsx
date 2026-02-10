import React from 'react';
import * as Shared from '../shared-demos';
import InfiniteMenu from "@/components/reactbits/InfiniteMenu";

export default function Render(props: any) {
  return (
    <div style={{ height: "600px", position: "relative" }}>
<InfiniteMenu
items={[
{
image:
"https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?q=80&w=1000&auto=format&fit=crop",
link: "https://google.com/",
title: "Item 1",
description: "This is a description",
},
{
image:
"https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?q=80&w=1000&auto=format&fit=crop",
link: "https://google.com/",
title: "Item 2",
description: "This is a description",
},
{
image:
"https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?q=80&w=1000&auto=format&fit=crop",
link: "https://google.com/",
title: "Item 3",
description: "This is a description",
},
{
image:
"https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?q=80&w=1000&auto=format&fit=crop",
link: "https://google.com/",
title: "Item 4",
description: "This is a description",
},
]}
/>
</div>
  );
}