import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "number",
        param: "value",
        label: "Value",
        defaultValue: 64,
        min: 0,
        max: 100,
        step: 1,
      },
      {
        type: "number",
        param: "max",
        label: "Max",
        defaultValue: 100,
        min: 1,
        max: 200,
        step: 1,
      },
    ];