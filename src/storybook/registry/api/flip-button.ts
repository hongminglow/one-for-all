import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "frontText",
        type: "string",
        default: "",
        description: "Text shown normally",
      },
      {
        prop: "backText",
        type: "string",
        default: "frontText",
        description: "Text shown on hover flip",
      },
    ];