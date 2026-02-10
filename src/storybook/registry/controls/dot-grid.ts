import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "number",
        param: "spacing",
        label: "Spacing",
        defaultValue: 22,
        min: 8,
        max: 80,
        step: 1,
      },
      {
        type: "number",
        param: "dotSize",
        label: "Dot Size",
        defaultValue: 2,
        min: 1,
        max: 8,
        step: 1,
      },
      {
        type: "number",
        param: "opacity",
        label: "Opacity",
        defaultValue: 0.18,
        min: 0,
        max: 0.8,
        step: 0.01,
      },
      {
        type: "color",
        param: "dotColor",
        label: "Dot Color",
        defaultValue: "#ffffff",
      },
    ];