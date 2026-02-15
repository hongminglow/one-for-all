import { ApiProp } from "../types";

export const api: ApiProp[] = [
  {
    prop: "className",
    type: "string",
    default: "—",
    description: "Additional CSS classes for the grid container",
  },
  {
    prop: "gridSize",
    type: "number",
    default: "40",
    description: "Number of tiles per row/column",
  },
  {
    prop: "showOverlay",
    type: "boolean",
    default: "true",
    description: "Whether to show the gradient overlay",
  },
  {
    prop: "fadeRadius",
    type: "number",
    default: "80",
    description: "Fade radius percentage for the gradient overlay",
  },
];
