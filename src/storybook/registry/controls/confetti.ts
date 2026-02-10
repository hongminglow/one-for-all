import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "number",
        param: "count",
        label: "Particle Count",
        defaultValue: 25,
        min: 10,
        max: 100,
        step: 5,
      },
      {
        type: "number",
        param: "gravity",
        label: "Gravity",
        defaultValue: 0.03,
        min: 0.01,
        max: 0.1,
        step: 0.01,
      },
      {
        type: "number",
        param: "wind",
        label: "Wind",
        defaultValue: 0.005,
        min: 0,
        max: 0.05,
        step: 0.001,
      },
    ];