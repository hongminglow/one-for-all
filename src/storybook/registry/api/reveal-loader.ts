import { ApiProp } from "../types";

export const api: ApiProp[] = [
  {
    prop: "text",
    type: "string",
    default: "LOADING",
    description: "Text to animate",
  },
  {
    prop: "revealColor",
    type: "string",
    default: "white",
    description: "Color of the reveal animation",
  },
];
