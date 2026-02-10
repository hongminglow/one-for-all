import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "children",
        type: "string",
        default: "",
        description: "Text content to reveal on scroll",
      },
      {
        prop: "className",
        type: "string",
        default: "",
        description: "Wrapper classes",
      },
    ];