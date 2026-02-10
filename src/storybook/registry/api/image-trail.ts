import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "items",
        type: "string[]",
        default: "[]",
        description: "Array of image URLs",
      },
      {
        prop: "variant",
        type: "number",
        default: "1",
        description: "Animation variant (1-8)",
      },
    ];