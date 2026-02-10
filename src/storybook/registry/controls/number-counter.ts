import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "number",
        param: "value",
        label: "Value",
        defaultValue: 1235,
        min: -5000,
        max: 5000,
        step: 1,
      },
      {
        type: "number",
        param: "precision",
        label: "Precision",
        defaultValue: 0,
        min: 0,
        max: 4,
        step: 1,
      },
      {
        type: "number",
        param: "durationMs",
        label: "Duration (ms)",
        defaultValue: 700,
        min: 150,
        max: 2000,
        step: 50,
      },
    ];