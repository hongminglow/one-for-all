import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "number",
        param: "particleCount",
        label: "Particle Count",
        defaultValue: 120,
        min: 20,
        max: 400,
        step: 10,
      },
      {
        type: "number",
        param: "spread",
        label: "Spread",
        defaultValue: 70,
        min: 10,
        max: 180,
        step: 5,
      },
    ];