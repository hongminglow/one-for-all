import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "number",
        param: "particleCount",
        label: "Particle Count",
        defaultValue: 700,
        min: 100,
        max: 1500,
        step: 50,
      },
      {
        type: "number",
        param: "baseSpeed",
        label: "Base Speed",
        defaultValue: 0,
        min: 0,
        max: 5,
        step: 0.1,
      },
      {
        type: "number",
        param: "rangeSpeed",
        label: "Range Speed",
        defaultValue: 1.5,
        min: 0.1,
        max: 5,
        step: 0.1,
      },
    ];