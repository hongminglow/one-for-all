import { ApiProp } from "../types";

export const api: ApiProp[] = [
  {
    prop: "children",
    type: "string",
    default: "—",
    description: "The text content to animate",
  },
  {
    prop: "className",
    type: "string",
    default: "—",
    description: "Additional CSS classes for the wrapper",
  },
  {
    prop: "duration",
    type: "number",
    default: "2.2",
    description: "Duration of the flip animation in seconds",
  },
  {
    prop: "delay",
    type: "number",
    default: "0",
    description: "Initial delay before animation starts in seconds",
  },
  {
    prop: "loop",
    type: "boolean",
    default: "true",
    description: "Whether the animation should loop infinitely",
  },
  {
    prop: "separator",
    type: "string",
    default: '" "',
    description: "Custom separator for splitting text (default is space)",
  },
];
