import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "number",
        param: "size",
        label: "Grid Size",
        defaultValue: 44,
        min: 12,
        max: 120,
        step: 2,
      },
      {
        type: "number",
        param: "opacity",
        label: "Grid Opacity",
        defaultValue: 0.12,
        min: 0,
        max: 0.6,
        step: 0.01,
      },
      {
        type: "number",
        param: "scanSpeed",
        label: "Scan Speed",
        defaultValue: 2.2,
        min: 0.4,
        max: 8,
        step: 0.1,
      },
      {
        type: "color",
        param: "gridColor",
        label: "Grid Color",
        defaultValue: "#ffffff",
      },
    ];