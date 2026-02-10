import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "number",
        param: "borderWidth",
        label: "Border Width",
        defaultValue: 1,
        min: 1,
        max: 6,
        step: 1,
      },
      {
        type: "number",
        param: "duration",
        label: "Duration",
        defaultValue: 14,
        min: 2,
        max: 30,
        step: 1,
      },
    ];