import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "boolean",
        param: "autoRotate",
        label: "Auto rotate",
        defaultValue: true,
      },
      {
        type: "number",
        param: "sphereRadius",
        label: "Radius",
        defaultValue: 160,
        min: 80,
        max: 240,
        step: 5,
      },
      {
        type: "number",
        param: "containerSize",
        label: "Size",
        defaultValue: 360,
        min: 260,
        max: 520,
        step: 10,
      },
    ];