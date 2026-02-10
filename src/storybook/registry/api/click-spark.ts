import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "sparkColor",
        type: "string",
        default: "#fff",
        description: "Color of sparks",
      },
      {
        prop: "sparkSize",
        type: "number",
        default: "10",
        description: "Size of individual sparks",
      },
      {
        prop: "sparkRadius",
        type: "number",
        default: "15",
        description: "Radius of explosion",
      },
      {
        prop: "sparkCount",
        type: "number",
        default: "8",
        description: "Number of sparks",
      },
      {
        prop: "duration",
        type: "number",
        default: "400",
        description: "Animation duration (ms)",
      },
    ];