import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "number",
        param: "holeSize",
        label: "Hole size",
        defaultValue: 220,
        min: 120,
        max: 360,
        step: 10,
      },
    ];