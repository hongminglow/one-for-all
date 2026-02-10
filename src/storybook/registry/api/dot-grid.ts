import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "dotSize",
        type: "number",
        default: "16",
        description: "Size of dots",
      },
      {
        prop: "gap",
        type: "number",
        default: "32",
        description: "Gap between dots",
      },
      {
        prop: "baseColor",
        type: "string",
        default: "'#5227FF'",
        description: "Idle color of dots",
      },
      {
        prop: "activeColor",
        type: "string",
        default: "'#5227FF'",
        description: "Color of dots on interaction",
      },
      {
        prop: "proximity",
        type: "number",
        default: "150",
        description: "Distance for interaction effect",
      },
    ];