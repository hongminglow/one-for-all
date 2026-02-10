import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "to",
        type: "number",
        default: "",
        description: "Target number",
      },
      {
        prop: "from",
        type: "number",
        default: "0",
        description: "Starting number",
      },
      {
        prop: "duration",
        type: "number",
        default: "2",
        description: "Animation duration (s)",
      },
      {
        prop: "separator",
        type: "string",
        default: "",
        description: "Thousands separator",
      },
    ];