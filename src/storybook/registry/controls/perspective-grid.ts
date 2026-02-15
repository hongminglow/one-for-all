import { DemoControl } from "../types";

export const controls: DemoControl[] = [
  {
    type: "text",
    param: "gridColor",
    label: "Grid Color",
    defaultValue: "rgba(255, 255, 255, 0.1)",
  },
  {
    type: "number",
    param: "gridOpacity",
    label: "Grid Opacity",
    defaultValue: 1,
    min: 0,
    max: 1,
    step: 0.1,
  },
];
