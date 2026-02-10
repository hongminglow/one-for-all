import React from "react";
import * as Shared from "../shared-demos";
import { HeroParallax } from "@/components/ui/hero-parallax";

export default function Render(props: any) {
	return (
		<div className="overflow-hidden preview relative flex min-h-[350px] w-full justify-center p-2 sm:p-10 items-center">
			<HeroParallax products={Shared.products} />
		</div>
	);
}
