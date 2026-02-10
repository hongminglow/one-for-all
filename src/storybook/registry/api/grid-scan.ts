import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "linesColor",
        type: "string",
        default: "'#392e4e'",
        description: "Color of the grid lines",
      },
      {
        prop: "scanColor",
        type: "string",
        default: "'#FF9FFC'",
        description: "Color of the scan line",
      },
      {
        prop: "scanDuration",
        type: "number",
        default: "2.0",
        description: "Duration of one scan cycle (seconds)",
      },
      {
        prop: "enablePost",
        type: "boolean",
        default: "true",
        description: "Enable post-processing effects (bloom, etc.)",
      },
      {
        prop: "bloomIntensity",
        type: "number",
        default: "0",
        description: "Intensity of the bloom effect",
      },
    ];