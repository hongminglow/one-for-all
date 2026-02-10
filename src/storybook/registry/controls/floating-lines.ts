import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "boolean",
        param: "interactive",
        label: "Interactive",
        defaultValue: true,
      },
      {
        type: "number",
        param: "animationSpeed",
        label: "Speed",
        defaultValue: 1,
        min: 0,
        max: 5,
        step: 0.05,
      },
      {
        type: "number",
        param: "bendRadius",
        label: "Bend Radius",
        defaultValue: 5,
        min: 0,
        max: 20,
        step: 0.1,
      },
      {
        type: "number",
        param: "bendStrength",
        label: "Bend Strength",
        defaultValue: -0.5,
        min: -2,
        max: 2,
        step: 0.05,
      },
      {
        type: "boolean",
        param: "parallax",
        label: "Parallax",
        defaultValue: true,
      },
      {
        type: "number",
        param: "parallaxStrength",
        label: "Parallax Strength",
        defaultValue: 0.2,
        min: 0,
        max: 1,
        step: 0.02,
      },
    ];