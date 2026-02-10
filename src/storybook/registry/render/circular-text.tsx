import React from 'react';
import * as Shared from '../shared-demos';
import CircularText from "@/components/reactbits/CircularText";

export default function Render(props: any) {
  return (
    <CircularText
text="REACT*BITS*COMPONENTS*"
onHover="speedUp"
spinDuration={20}
className="custom-class text-(--sb-text-strong)"
{...props}
/>
  );
}