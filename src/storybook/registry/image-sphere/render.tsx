import React from "react";
import * as Shared from "../shared-demos";
import { SphereImageGrid } from "@/components/jolyui/ImageSphere";

export default function Render(props: any) {
	return (
		<div className="flex items-center justify-center" style={{ height: 420 }}>
			<SphereImageGrid images={Shared.DEMO_IMAGES} containerSize={400} sphereRadius={180} autoRotate={true} />
		</div>
	);
}
