import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "color",
        param: "color",
        label: "Color",
        defaultValue: "#7df9ff",
      },
      {
        type: "number",
        param: "speed",
        label: "Speed",
        defaultValue: 1,
        min: 0,
        max: 5,
        step: 0.1,
      },
      {
        type: "number",
        param: "chaos",
        label: "Chaos",
        defaultValue: 0.12,
        min: 0,
        max: 1,
        step: 0.01,
      },
      {
        type: "number",
        param: "borderRadius",
        label: "Border Radius",
        defaultValue: 16,
        min: 0,
        max: 100,
        step: 1,
      },
    ];