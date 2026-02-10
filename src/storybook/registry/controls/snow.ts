import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "number",
        param: "count",
        label: "Count",
        defaultValue: 150,
        min: 50,
        max: 500,
        step: 10,
      },
      {
        type: "number",
        param: "intensity",
        label: "Intensity",
        defaultValue: 1,
        min: 0.1,
        max: 2,
        step: 0.1,
      },
      {
        type: "number",
        param: "wind",
        label: "Wind",
        defaultValue: 0.3,
        min: -1,
        max: 1,
        step: 0.1,
      },
    ];