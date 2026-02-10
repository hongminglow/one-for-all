import React from "react";
import dynamic from "next/dynamic";

const ThreeDMarqueeDemo = dynamic(() => import("@/components/shadcn/ThreeDMarquee").then((mod) => mod.Demo), {
	ssr: false,
});

export default function Render() {
	return (
		<div className="w-full overflow-hidden">
			<ThreeDMarqueeDemo />
		</div>
	);
}
