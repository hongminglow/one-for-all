import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "number",
        param: "size",
        label: "Size",
        defaultValue: 80,
        min: 20,
        max: 240,
        step: 5,
      },
      {
        type: "number",
        param: "duration",
        label: "Duration",
        defaultValue: 6,
        min: 1,
        max: 20,
        step: 0.5,
      },
      {
        type: "number",
        param: "borderWidth",
        label: "Border Width",
        defaultValue: 1,
        min: 1,
        max: 6,
        step: 1,
      },
      {
        type: "boolean",
        param: "reverse",
        label: "Reverse",
        defaultValue: false,
      },
    ];