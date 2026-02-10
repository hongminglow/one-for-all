import React from 'react';
import * as Shared from '../shared-demos';
import Carousel from "@/components/reactbits/Carousel";

export default function Render(props: any) {
  return (
    <div className="w-full flex items-center justify-center">
<Carousel
baseWidth={props?.baseWidth ?? 320}
autoplay={props?.autoplay ?? false}
autoplayDelay={props?.autoplayDelay ?? 3000}
pauseOnHover={props?.pauseOnHover ?? false}
loop={props?.loop ?? false}
round={props?.round ?? false}
{...props}
/>
</div>
  );
}