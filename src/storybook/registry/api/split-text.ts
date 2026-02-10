import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "text",
        type: "string",
        default: "",
        description: "Text to animate",
      },
      {
        prop: "delay",
        type: "number",
        default: "100",
        description: "Delay between letters (ms)",
      },
      {
        prop: "textAlign",
        type: "string",
        default: "center",
        description: "Text alignment",
      },
      {
        prop: "threshold",
        type: "number",
        default: "0.1",
        description: "Threshold for animation",
      },
    ];