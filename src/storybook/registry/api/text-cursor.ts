import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "text",
        type: "string",
        default: "⚛️",
        description: "Cursor text",
      },
      {
        prop: "spacing",
        type: "number",
        default: "100",
        description: "Spacing between trails",
      },
      {
        prop: "randomFloat",
        type: "boolean",
        default: "true",
        description: "Randomized movement",
      },
    ];