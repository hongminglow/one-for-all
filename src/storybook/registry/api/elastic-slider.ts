import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "defaultValue",
        type: "number",
        default: "50",
        description: "Initial value",
      },
      {
        prop: "startingValue",
        type: "number",
        default: "0",
        description: "Minimum value",
      },
      {
        prop: "maxValue",
        type: "number",
        default: "100",
        description: "Maximum value",
      },
      {
        prop: "isStepped",
        type: "boolean",
        default: "false",
        description: "Enable steps",
      },
    ];