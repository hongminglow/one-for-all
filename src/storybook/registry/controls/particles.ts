import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "number",
        param: "count",
        label: "Count",
        defaultValue: 70,
        min: 10,
        max: 220,
        step: 5,
      },
      {
        type: "number",
        param: "speed",
        label: "Speed",
        defaultValue: 0.6,
        min: 0,
        max: 3,
        step: 0.05,
      },
      {
        type: "number",
        param: "linkDistance",
        label: "Link Distance",
        defaultValue: 120,
        min: 40,
        max: 240,
        step: 5,
      },
      {
        type: "color",
        param: "color",
        label: "Color",
        defaultValue: "#ffffff",
      },
      {
        type: "boolean",
        param: "interactive",
        label: "Interactive",
        defaultValue: true,
      },
    ];