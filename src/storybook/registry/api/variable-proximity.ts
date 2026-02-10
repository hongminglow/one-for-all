import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "text",
        type: "string",
        default: "",
        description: "Text to display",
      },
      {
        prop: "radius",
        type: "number",
        default: "100",
        description: "Effect radius",
      },
      {
        prop: "fontSize",
        type: "number",
        default: "16",
        description: "Base font size",
      },
    ];