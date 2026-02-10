import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "number",
        param: "frequency",
        label: "Frequency",
        defaultValue: 1.1,
        min: 0.1,
        max: 6,
        step: 0.1,
      },
      {
        type: "number",
        param: "glow",
        label: "Glow",
        defaultValue: 10,
        min: 0,
        max: 30,
        step: 1,
      },
      {
        type: "number",
        param: "thickness",
        label: "Thickness",
        defaultValue: 2,
        min: 1,
        max: 8,
        step: 1,
      },
      {
        type: "color",
        param: "color",
        label: "Color",
        defaultValue: "#ffffff",
      },
    ];