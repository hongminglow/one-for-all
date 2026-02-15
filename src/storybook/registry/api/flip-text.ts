import { ApiProp } from "../types";

export const api: ApiProp[] = [
  {
    prop: "children",
    type: "string",
    default: "—",
    description: "The text to animate",
  },
  {
    prop: "duration",
    type: "number",
    default: "2.2",
    description: "Duration of the flip animation",
  },
  {
    prop: "delay",
    type: "number",
    default: "0",
    description: "Initial delay before animation starts",
  },
  {
    prop: "loop",
    type: "boolean",
    default: "true",
    description: "Whether the animation should repeat",
  },
  {
    prop: "together",
    type: "boolean",
    default: "false",
    description: "Whether to flip all characters at once",
  },
];
