import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "number",
        param: "gridSize",
        label: "Grid Size",
        defaultValue: 28,
        min: 10,
        max: 80,
        step: 1,
      },
      {
        type: "number",
        param: "amplitude",
        label: "Amplitude",
        defaultValue: 8,
        min: 0,
        max: 30,
        step: 1,
      },
      {
        type: "number",
        param: "speed",
        label: "Speed",
        defaultValue: 1,
        min: 0,
        max: 4,
        step: 0.05,
      },
    ];