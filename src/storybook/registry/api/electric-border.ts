import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "color",
        type: "string",
        default: "#5227FF",
        description: "Border color",
      },
      {
        prop: "speed",
        type: "number",
        default: "1",
        description: "Animation speed",
      },
      {
        prop: "chaos",
        type: "number",
        default: "0.12",
        description: "Noise chaos level",
      },
      {
        prop: "borderRadius",
        type: "number",
        default: "24",
        description: "Border radius (px)",
      },
    ];