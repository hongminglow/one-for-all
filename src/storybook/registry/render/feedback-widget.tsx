import React from 'react';
import * as Shared from '../shared-demos';
import FeedbackWidget from "@/components/jolyui/FeedbackWidget";

export default function Render(props: any) {
  return (
    <div
className="flex items-center justify-center"
style={{ height: 270 }}
>
<FeedbackWidget label={props?.title ?? "How was this demo?"} />
</div>
  );
}