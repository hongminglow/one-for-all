import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "items",
        type: "MenuItem[]",
        default: "[]",
        description: "Menu items {image, link, title}",
      },
      {
        prop: "scale",
        type: "number",
        default: "1.0",
        description: "Global scale",
      },
    ];