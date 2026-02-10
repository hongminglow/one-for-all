import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "number",
        param: "balls",
        label: "Balls",
        defaultValue: 18,
        min: 6,
        max: 60,
        step: 1,
      },
      {
        type: "number",
        param: "gravity",
        label: "Gravity",
        defaultValue: 0.45,
        min: 0,
        max: 2,
        step: 0.05,
      },
      {
        type: "number",
        param: "bounce",
        label: "Bounce",
        defaultValue: 0.86,
        min: 0.2,
        max: 0.98,
        step: 0.01,
      },
    ];