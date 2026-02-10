import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "text",
        type: "string",
        default: "",
        description: "Text to shine",
      },
      {
        prop: "disabled",
        type: "boolean",
        default: "false",
        description: "Disable shine effect",
      },
      {
        prop: "speed",
        type: "number",
        default: "3",
        description: "Animation speed (s)",
      },
    ];