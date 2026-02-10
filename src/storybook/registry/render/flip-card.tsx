import React from 'react';
import * as Shared from '../shared-demos';
import { FlipCard } from "@/components/animate-ui/components/community/flip-card";

type RenderProps = Record<string, unknown>;


export default function Render(props: RenderProps) {
  return (
    <div
className="flex items-center justify-center p-4"
style={{ height: 420 }}
>
<FlipCard
data={{
name: "Hong Ming",
username: "hongminglow",
image: "https://avatars.githubusercontent.com/u/41559868?v=4",
bio: "Passionate developer building awesome things with React and Motion.",
stats: {
following: 42,
followers: 1337,
posts: 120,
},
socialLinks: {
github: "https://github.com/hongminglow",
twitter: "https://twitter.com/hongminglow",
linkedin: "https://linkedin.com/in/hongminglow",
},
}}
/>
</div>
  );
}