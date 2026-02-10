import React from 'react';
import * as Shared from '../shared-demos';
import Stack from "@/components/reactbits/Stack";

export default function Render(props: any) {
  return (
    <div className="w-full h-[600px] flex items-center justify-center">
<Stack
randomRotation={true}
sensitivity={180}
cards={[
<img
key={1}
src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=400&q=80"
alt="Card 1"
className="w-[200px] h-[200px] object-cover rounded-lg"
/>,
<img
key={2}
src="https://images.unsplash.com/photo-1449824913929-79821eda29cb?w=400&q=80"
alt="Card 2"
className="w-[200px] h-[200px] object-cover rounded-lg"
/>,
<img
key={3}
src="https://images.unsplash.com/photo-1455587734955-081b22074882?w=400&q=80"
alt="Card 3"
className="w-[200px] h-[200px] object-cover rounded-lg"
/>,
<img
key={4}
src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&q=80"
alt="Card 4"
className="w-[200px] h-[200px] object-cover rounded-lg"
/>,
]}
/>
</div>
  );
}