import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "number",
        param: "scale",
        label: "Scale",
        defaultValue: 1,
        min: 0.5,
        max: 2,
        step: 0.1,
      },
    ];