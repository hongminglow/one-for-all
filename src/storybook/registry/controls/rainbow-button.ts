import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "text",
        param: "text",
        label: "Text",
        defaultValue: "Rainbow Button",
      },
      {
        type: "number",
        param: "duration",
        label: "Duration",
        defaultValue: 2,
        min: 0.5,
        max: 8,
        step: 0.1,
      },
      {
        type: "number",
        param: "borderWidth",
        label: "Border Width",
        defaultValue: 2,
        min: 1,
        max: 6,
        step: 1,
      },
      {
        type: "boolean",
        param: "animated",
        label: "Animated",
        defaultValue: true,
      },
    ];