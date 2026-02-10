import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "value",
        type: "number",
        default: "0",
        description: "Target number",
      },
      {
        prop: "precision",
        type: "number",
        default: "0",
        description: "Digits after decimal",
      },
      {
        prop: "durationMs",
        type: "number",
        default: "700",
        description: "Animation duration (ms)",
      },
      {
        prop: "className",
        type: "string",
        default: "",
        description: "Text className",
      },
    ];