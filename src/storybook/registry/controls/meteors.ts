import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "number",
        param: "count",
        label: "Count",
        defaultValue: 20,
        min: 5,
        max: 100,
        step: 5,
      },
      {
        type: "number",
        param: "angle",
        label: "Angle",
        defaultValue: 215,
        min: 0,
        max: 360,
        step: 5,
      },
      {
        type: "color",
        param: "color",
        label: "Color",
        defaultValue: "#64748b",
      },
    ];