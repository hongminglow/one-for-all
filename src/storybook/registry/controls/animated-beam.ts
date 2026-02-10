import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "number",
        param: "curvature",
        label: "Curvature",
        defaultValue: 0.2,
        min: -0.8,
        max: 0.8,
        step: 0.05,
      },
      {
        type: "number",
        param: "duration",
        label: "Duration",
        defaultValue: 2,
        min: 0.5,
        max: 8,
        step: 0.1,
      },
      {
        type: "boolean",
        param: "reverse",
        label: "Reverse",
        defaultValue: false,
      },
    ];