import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "owner",
        type: "string",
        default: "",
        description: "GitHub repo owner",
      },
      {
        prop: "repo",
        type: "string",
        default: "",
        description: "GitHub repo name",
      },
      {
        prop: "stars",
        type: "number",
        default: "(fetch if undefined)",
        description: "Override stars count",
      },
    ];