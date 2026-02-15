import { ApiProp } from "../types";

export const api: ApiProp[] = [
  {
    prop: "gridColor",
    type: "string",
    default: "rgba(255, 255, 255, 0.1)",
    description: "Color of the grid lines",
  },
  {
    prop: "gridOpacity",
    type: "number",
    default: "1",
    description: "Opacity of the grid",
  },
];
