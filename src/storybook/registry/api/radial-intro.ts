import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "title",
        type: "string",
        default: "",
        description: "Heading",
      },
      {
        prop: "subtitle",
        type: "string",
        default: "",
        description: "Optional subheading",
      },
      {
        prop: "className",
        type: "string",
        default: "",
        description: "Wrapper classes",
      },
    ];