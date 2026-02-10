import React from 'react';
import * as Shared from '../shared-demos';
import FuzzyText from "@/components/reactbits/FuzzyText";

export default function Render(props: any) {
  return (
    <FuzzyText
baseIntensity={0.18}
hoverIntensity={0.5}
enableHover={true}
className="text-[40px] font-black text-(--sb-text-strong)"
{...props}
>
Fuzzy Text
</FuzzyText>
  );
}