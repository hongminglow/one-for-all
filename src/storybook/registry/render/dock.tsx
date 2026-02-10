import type { ComponentProps } from "react";
import React from "react";
import * as Shared from "../shared-demos";
import Dock from "@/components/reactbits/Dock";

type RenderProps = Partial<ComponentProps<typeof Dock>>;

const defaultItems: NonNullable<ComponentProps<typeof Dock>["items"]> = [
	{
		icon: <span className="text-[22px] leading-none text-white">🏠</span>,
		label: "Home",
		onClick: () => {},
	},
	{
		icon: <span className="text-[22px] leading-none text-white">🔍</span>,
		label: "Search",
		onClick: () => {},
	},
	{
		icon: <span className="text-[22px] leading-none text-white">📁</span>,
		label: "Files",
		onClick: () => {},
	},
	{
		icon: <span className="text-[22px] leading-none text-white">⚙️</span>,
		label: "Settings",
		onClick: () => {},
	},
];

export default function Render(props: RenderProps) {
	const {
		items = defaultItems,
		magnification = 70,
		distance = 200,
		panelHeight = 68,
		dockHeight = 256,
		baseItemSize = 50,
		...rest
	} = props;

	return (
		<div className="w-full min-h-80 bg-(--sb-bg) rounded-xl border border-(--sb-border) relative overflow-hidden">
			<Dock
				items={items}
				magnification={magnification}
				distance={distance}
				panelHeight={panelHeight}
				dockHeight={dockHeight}
				baseItemSize={baseItemSize}
				{...rest}
			/>
		</div>
	);
}
