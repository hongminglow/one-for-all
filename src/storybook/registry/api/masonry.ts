import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "items",
        type: "Item[]",
        default: "[]",
        description: "Masonry grid items",
      },
      {
        prop: "animateFrom",
        type: "string",
        default: "bottom",
        description: "Animation origin",
      },
      {
        prop: "stagger",
        type: "number",
        default: "0.05",
        description: "Stagger delay (s)",
      },
      {
        prop: "scaleOnHover",
        type: "boolean",
        default: "true",
        description: "Scale on hover",
      },
    ];