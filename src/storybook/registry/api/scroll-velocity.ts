import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "texts",
        type: "string[]",
        default: "[]",
        description: "Array of text strings to scroll",
      },
      {
        prop: "velocity",
        type: "number",
        default: "100",
        description: "Scroll velocity",
      },
      {
        prop: "numCopies",
        type: "number",
        default: "6",
        description: "Number of copies for infinite effect",
      },
    ];