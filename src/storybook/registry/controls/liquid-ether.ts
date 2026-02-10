import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "number",
        param: "resolution",
        label: "Resolution Scale",
        defaultValue: 1,
        min: 0.25,
        max: 2,
        step: 0.05,
      },
    ];