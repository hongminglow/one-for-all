import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "items",
        type: "(string | ReactNode)[]",
        default: "[]",
        description: "Array of items (images or text) to display in the grid",
      },
      {
        prop: "gradientColor",
        type: "string",
        default: "'black'",
        description: "Color of the radial gradient background",
      },
    ];