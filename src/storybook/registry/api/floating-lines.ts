import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "lineCount",
        type: "number | number[]",
        default: "[6]",
        description: "Lines per wave",
      },
      {
        prop: "lineDistance",
        type: "number | number[]",
        default: "[5]",
        description: "Distance between lines",
      },
      {
        prop: "animationSpeed",
        type: "number",
        default: "1",
        description: "Animation speed",
      },
      {
        prop: "interactive",
        type: "boolean",
        default: "true",
        description: "Mouse interactivity",
      },
    ];