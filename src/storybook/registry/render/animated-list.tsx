import React from "react";
import * as Shared from "../shared-demos";
import AnimatedList from "@/components/reactbits/AnimatedList";

export default function Render(props: any) {
	return (
		<div className="w-full flex items-center justify-center min-h-[500px] bg-black rounded-xl border border-(--sb-border) overflow-hidden">
			<AnimatedList
				items={props?.items || ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8"]}
				onItemSelect={props?.onItemSelect || ((item, index) => console.log(item, index))}
				showGradients={props?.showGradients ?? true}
				enableArrowNavigation={props?.enableArrowNavigation ?? true}
				displayScrollbar={props?.displayScrollbar ?? true}
				initialSelectedIndex={props?.initialSelectedIndex ?? -1}
				{...props}
			/>
		</div>
	);
}
