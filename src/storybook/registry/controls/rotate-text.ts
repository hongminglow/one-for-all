import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "number",
        param: "duration",
        label: "Anim Duration",
        defaultValue: 0.5,
        min: 0.1,
        max: 2,
        step: 0.05,
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