import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "children",
        type: "string",
        default: "",
        description: "Text content",
      },
      {
        prop: "duration",
        type: "number",
        default: "0.5",
        description: "Highlight expand duration",
      },
      {
        prop: "delay",
        type: "number",
        default: "0.2",
        description: "Delay before highlight animates",
      },
      {
        prop: "className",
        type: "string",
        default: "",
        description: "Wrapper className",
      },
      {
        prop: "highlightClassName",
        type: "string",
        default: "",
        description: "Highlight span className",
      },
    ];