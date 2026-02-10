import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "number",
        param: "velocity",
        label: "Velocity",
        defaultValue: 100,
        min: 10,
        max: 500,
        step: 10,
      },
    ];