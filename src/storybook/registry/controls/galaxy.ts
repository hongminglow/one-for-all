import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "number",
        param: "stars",
        label: "Stars",
        defaultValue: 900,
        min: 200,
        max: 2200,
        step: 50,
      },
      {
        type: "number",
        param: "rotationSpeed",
        label: "Rotation Speed",
        defaultValue: 0.25,
        min: 0,
        max: 2,
        step: 0.05,
      },
    ];