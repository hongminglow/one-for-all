import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "number",
        param: "sparklesCount",
        label: "Sparkles Count",
        defaultValue: 10,
        min: 0,
        max: 30,
        step: 1,
      },
    ];