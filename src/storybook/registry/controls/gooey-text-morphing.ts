import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "number",
        param: "duration",
        label: "Duration",
        defaultValue: 1.2,
        min: 0.4,
        max: 3,
        step: 0.1,
      },
      {
        type: "number",
        param: "pauseDuration",
        label: "Pause",
        defaultValue: 1.2,
        min: 0,
        max: 3,
        step: 0.1,
      },
    ];