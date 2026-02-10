import React from 'react';
import * as Shared from '../shared-demos';
import ModelViewer from "@/components/reactbits/ModelViewer";

export default function Render(props: any) {
  return (
    <ModelViewer
url="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/Duck/glTF-Binary/Duck.glb"
width={1000}
height={400}
modelXOffset={0.5}
modelYOffset={0}
enableMouseParallax
enableHoverRotation
environmentPreset="forest"
fadeIn={false}
autoRotate={false}
autoRotateSpeed={0.35}
showScreenshotButton
/>
  );
}