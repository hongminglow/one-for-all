import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "text",
        param: "text",
        label: "Text",
        defaultValue: "GLITCH",
      },
      {
        type: "number",
        param: "speed",
        label: "Speed",
        defaultValue: 1,
        min: 0.1,
        max: 5,
        step: 0.1,
      },
      {
        type: "boolean",
        param: "enableShadows",
        label: "Enable Shadows",
        defaultValue: true,
      },
      {
        type: "boolean",
        param: "enableOnHover",
        label: "Enable on Hover",
        defaultValue: true,
      },
    ];