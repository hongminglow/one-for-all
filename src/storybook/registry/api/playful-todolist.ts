import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "title",
        type: "string",
        default: "Management",
        description: "Header label",
      },
      {
        prop: "className",
        type: "string",
        default: "",
        description: "Wrapper classes",
      },
    ];