import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "text",
        type: "string",
        default: "",
        description: "Text to display",
      },
      {
        prop: "speed",
        type: "number",
        default: "0.05",
        description: "Animation speed",
      },
      {
        prop: "blurAmount",
        type: "number",
        default: "10",
        description: "Blur intensity",
      },
    ];