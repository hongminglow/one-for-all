import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "number",
        param: "count",
        label: "Count",
        defaultValue: 5,
        min: 1,
        max: 10,
        step: 1,
      },
      {
        type: "number",
        param: "speed",
        label: "Speed",
        defaultValue: 1,
        min: 0.1,
        max: 3,
        step: 0.1,
      },
      {
        type: "color",
        param: "color",
        label: "Color",
        defaultValue: "#06b6d4",
      },
    ];