import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "number",
        param: "count",
        label: "Particle Count",
        defaultValue: 300,
        min: 50,
        max: 1000,
        step: 50,
      },
      {
        type: "number",
        param: "magnetRadius",
        label: "Magnet Radius",
        defaultValue: 10,
        min: 1,
        max: 50,
        step: 1,
      },
      {
        type: "number",
        param: "ringRadius",
        label: "Ring Radius",
        defaultValue: 10,
        min: 1,
        max: 50,
        step: 1,
      },
      {
        type: "number",
        param: "particleSize",
        label: "Particle Size",
        defaultValue: 2,
        min: 0.5,
        max: 10,
        step: 0.5,
      },
      {
        type: "color",
        param: "color",
        label: "Color",
        defaultValue: "#FF9FFC",
      },
      {
        type: "boolean",
        param: "autoAnimate",
        label: "Auto Animate",
        defaultValue: false,
      },
    ];