import React from 'react';
import * as Shared from '../shared-demos';
import Hyperspeed from "@/components/reactbits/Hyperspeed";

export default function Render(props: any) {
  return (
    <div className="w-full h-[600px] min-h-[600px] bg-black relative overflow-hidden rounded-xl">
<Hyperspeed
preset="one"
effectOptions={{
colors: {
roadColor: 0x080808,
islandColor: 0x0a0a0a,
background: 0x000000,
shoulderLines: 0xffffff,
brokenLines: 0xffffff,
leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
sticks: 0x03b3c3,
},
}}
/>
</div>
  );
}