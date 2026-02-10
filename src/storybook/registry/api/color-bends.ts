import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "colors",
        type: "string[]",
        default: "[]",
        description: "Array of hex colors",
      },
      {
        prop: "speed",
        type: "number",
        default: "0.2",
        description: "Animation speed",
      },
      {
        prop: "rotation",
        type: "number",
        default: "45",
        description: "Global rotation",
      },
      {
        prop: "noise",
        type: "number",
        default: "0.1",
        description: "Noise amount",
      },
    ];