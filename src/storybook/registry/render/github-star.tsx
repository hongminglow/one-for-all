import React from 'react';
import * as Shared from '../shared-demos';
import GitHubStarButton from "@/components/jolyui/GitHubStarButton";

export default function Render(props: any) {
  return (
    <div
className="flex items-center justify-center"
style={{ height: 180 }}
>
<GitHubStarButton
owner={props?.owner ?? "vercel"}
repo={props?.repo ?? "next.js"}
stars={
typeof props?.stars === "number" && props.stars > 0
? props.stars
: undefined
}
/>
</div>
  );
}