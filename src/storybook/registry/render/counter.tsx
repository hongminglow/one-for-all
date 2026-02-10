"use client";

import Counter from "@/components/reactbits/Counter";
import type { ComponentProps } from "react";
import React from "react";

type RenderProps = ComponentProps<typeof Counter>;

export default function Render(props: RenderProps) {
	const valueFromProps = typeof props?.value === "number" ? props.value : 123;
	const initialValue = Math.max(0, Math.min(999, Math.round(valueFromProps)));

	const [value, setValue] = React.useState<number>(initialValue);

	React.useEffect(() => {
		setValue(initialValue);
	}, [initialValue]);

	return (
		<div className="flex w-full flex-col items-center justify-center gap-6">
			<div className="flex w-full items-center justify-center rounded-2xl bg-black/20 py-10">
				<Counter
					value={value}
					places={[100, 10, 1]}
					fontSize={80}
					padding={5}
					gap={10}
					textColor="white"
					fontWeight={900}
				/>
			</div>

			<div className="w-full max-w-md">
				<div className="flex items-center justify-between text-sm text-muted-foreground">
					<span>Value</span>
					<span className="tabular-nums">{value}</span>
				</div>
				<input
					aria-label="Counter value"
					className="mt-2 w-full"
					max={999}
					min={0}
					onChange={(e) => setValue(Number(e.target.value))}
					step={1}
					type="range"
					value={value}
				/>
			</div>
		</div>
	);
}
