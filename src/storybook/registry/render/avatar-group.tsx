import React from 'react';
import * as Shared from '../shared-demos';
import AvatarGroup from "@/components/shadcn/AvatarGroup";

export default function Render(props: any) {
  return (
    <div className="w-full py-10">
<AvatarGroup
avatars={[
{
src: "https://i.pravatar.cc/150?u=1",
alt: "User 1",
name: "Alex",
},
{
src: "https://i.pravatar.cc/150?u=2",
alt: "User 2",
name: "Sarah",
},
{
src: "https://i.pravatar.cc/150?u=3",
alt: "User 3",
name: "James",
},
{
src: "https://i.pravatar.cc/150?u=4",
alt: "User 4",
name: "Maria",
},
{
src: "https://i.pravatar.cc/150?u=5",
alt: "User 5",
name: "Kevin",
},
]}
/>
</div>
  );
}