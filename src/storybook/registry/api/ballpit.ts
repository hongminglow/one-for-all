import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "count",
        type: "number",
        default: "200",
        description: "Number of balls",
      },
      {
        prop: "colors",
        type: "number[]",
        default: "[0, 0, 0]",
        description: "Array of hex colors for balls",
      },
      {
        prop: "gravity",
        type: "number",
        default: "0.5",
        description: "Physics gravity",
      },
      {
        prop: "friction",
        type: "number",
        default: "0.9975",
        description: "Physics friction",
      },
      {
        prop: "wallBounce",
        type: "number",
        default: "0.95",
        description: "Bouncing factor from walls",
      },
      {
        prop: "followCursor",
        type: "boolean",
        default: "true",
        description: "Whether balls react to cursor",
      },
    ];