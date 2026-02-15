import { DemoControl } from "../types";

export const controls: DemoControl[] = [
  {
    type: "number",
    param: "gridSize",
    label: "Grid Size",
    defaultValue: 40,
    min: 10,
    max: 100,
  },
  {
    type: "boolean",
    param: "showOverlay",
    label: "Show Overlay",
    defaultValue: true,
  },
  {
    type: "number",
    param: "fadeRadius",
    label: "Fade Radius",
    defaultValue: 80,
    min: 0,
    max: 100,
  },
];
