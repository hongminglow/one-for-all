import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "children",
        type: "ReactNode",
        default: "",
        description: "Text content",
      },
      {
        prop: "sparklesCount",
        type: "number",
        default: "10",
        description: "Number of sparkles",
      },
      {
        prop: "colors",
        type: "{ first: string; second: string }",
        default: "{ first: '#9E7AFF', second: '#FE8BBB' }",
        description: "Sparkle colors",
      },
      {
        prop: "className",
        type: "string",
        default: "",
        description: "Wrapper classes",
      },
    ];