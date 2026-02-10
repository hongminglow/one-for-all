import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "color",
        param: "sparkColor",
        label: "Spark Color",
        defaultValue: "#fff",
      },
      {
        type: "number",
        param: "sparkSize",
        label: "Spark Size",
        defaultValue: 10,
        min: 5,
        max: 50,
      },
      {
        type: "number",
        param: "sparkRadius",
        label: "Spark Radius",
        defaultValue: 15,
        min: 5,
        max: 100,
      },
      {
        type: "number",
        param: "sparkCount",
        label: "Spark Count",
        defaultValue: 8,
        min: 3,
        max: 20,
      },
      {
        type: "number",
        param: "duration",
        label: "Duration (ms)",
        defaultValue: 400,
        min: 100,
        max: 2000,
      },
    ];