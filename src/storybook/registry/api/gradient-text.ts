import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "colors",
        type: "string[]",
        default: "['#40ffaa', '#4079ff', '#40ffaa', '#4079ff', '#40ffaa']",
        description: "Gradient colors",
      },
      {
        prop: "animationSpeed",
        type: "number",
        default: "3",
        description: "Animation speed (s)",
      },
      {
        prop: "showBorder",
        type: "boolean",
        default: "false",
        description: "Show text border",
      },
    ];