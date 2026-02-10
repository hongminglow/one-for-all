import React from "react";
import Counter from "@/components/reactbits/Counter";

export default function Render(props: any) {
  const value = typeof props?.value === "number" ? props.value : 1234;

  return (
    <div className="flex w-full items-center justify-center">
      <Counter value={value} fontSize={72} />
    </div>
  );
}
