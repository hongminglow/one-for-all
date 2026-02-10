import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "text",
        type: "string",
        default: "",
        description: "Text content to animate",
      },
      {
        prop: "speed",
        type: "number",
        default: "2",
        description: "Animation speed in seconds",
      },
      {
        prop: "colors",
        type: "string[]",
        default: "['#b5b5b5', '#ffffff', '#b5b5b5']",
        description: "Colors for the shine gradient",
      },
      {
        prop: "blur",
        type: "number",
        default: "0",
        description: "Blur amount (px)",
      },
      {
        prop: "className",
        type: "string",
        default: "",
        description: "Wrapper classes",
      },
    ];