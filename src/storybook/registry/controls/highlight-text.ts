import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "text",
        param: "text",
        label: "Text",
        defaultValue: "Highlight me",
      },
      {
        type: "number",
        param: "duration",
        label: "Duration",
        defaultValue: 0.5,
        min: 0.1,
        max: 2,
        step: 0.05,
      },
      {
        type: "number",
        param: "delay",
        label: "Delay",
        defaultValue: 0.1,
        min: 0,
        max: 2,
        step: 0.05,
      },
    ];