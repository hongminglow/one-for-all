import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "borderWidth",
        type: "number",
        default: "1",
        description: "Border thickness (px)",
      },
      {
        prop: "duration",
        type: "number",
        default: "14",
        description: "Animation duration (seconds)",
      },
      {
        prop: "shineColor",
        type: "string | string[]",
        default: "#000000",
        description: "Shine color(s) used in the radial gradient",
      },
      {
        prop: "className",
        type: "string",
        default: "",
        description: "Additional classes for the overlay",
      },
    ];