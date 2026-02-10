import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "select",
        param: "animationType",
        label: "Animation",
        defaultValue: "rotate",
        options: ["rotate", "hover", "3drotate"],
      },
      {
        type: "number",
        param: "glow",
        label: "Glow",
        defaultValue: 1,
        min: 0,
        max: 3,
        step: 0.05,
      },
      {
        type: "number",
        param: "noise",
        label: "Noise",
        defaultValue: 0.5,
        min: 0,
        max: 2,
        step: 0.05,
      },
      {
        type: "number",
        param: "hueShift",
        label: "Hue Shift",
        defaultValue: 0,
        min: -3.14,
        max: 3.14,
        step: 0.05,
      },
      {
        type: "number",
        param: "bloom",
        label: "Bloom",
        defaultValue: 1,
        min: 0,
        max: 3,
        step: 0.05,
      },
      {
        type: "boolean",
        param: "suspendWhenOffscreen",
        label: "Suspend Offscreen",
        defaultValue: false,
      },
    ];