import type { ComponentProps } from "react";
import React from "react";
import * as Shared from "../shared-demos";
import FeedbackWidget from "@/components/jolyui/FeedbackWidget";

type RenderProps = Partial<ComponentProps<typeof FeedbackWidget>>;

export default function Render(props: RenderProps) {
	const { label = "How was this demo?", ...rest } = props;

	return (
		<div className="flex items-center justify-center" style={{ height: 270 }}>
			<FeedbackWidget label={label} {...rest} />
		</div>
	);
}
