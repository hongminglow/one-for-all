import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "number",
        param: "rotation",
        label: "Rotation (deg)",
        defaultValue: 45,
        min: -180,
        max: 180,
        step: 1,
      },
      {
        type: "number",
        param: "speed",
        label: "Speed",
        defaultValue: 0.2,
        min: 0,
        max: 2,
        step: 0.05,
      },
      {
        type: "boolean",
        param: "transparent",
        label: "Transparent",
        defaultValue: true,
      },
      {
        type: "number",
        param: "warpStrength",
        label: "Warp",
        defaultValue: 1,
        min: 0,
        max: 3,
        step: 0.05,
      },
      {
        type: "number",
        param: "noise",
        label: "Noise",
        defaultValue: 0.1,
        min: 0,
        max: 1,
        step: 0.02,
      },
    ];