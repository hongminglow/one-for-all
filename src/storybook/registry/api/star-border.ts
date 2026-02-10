import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "color",
        type: "string",
        default: "white",
        description: "Star color",
      },
      {
        prop: "speed",
        type: "string",
        default: "6s",
        description: "Animation duration",
      },
      {
        prop: "thickness",
        type: "number",
        default: "1",
        description: "Border thickness",
      },
      {
        prop: "as",
        type: "ElementType",
        default: "button",
        description: "Render as element",
      },
    ];