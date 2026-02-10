import React from 'react';
import * as Shared from '../shared-demos';
import CreditCard from "@/components/shadcn/CreditCard";

export default function Render(props: any) {
  return (
    <div className="w-full flex items-center justify-center">
<CreditCard
number={props?.number}
name={props?.name}
expiry={props?.expiry}
/>
</div>
  );
}