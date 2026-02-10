import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "text",
        type: "string",
        default: "",
        description: "Text to rotate",
      },
      {
        prop: "radius",
        type: "number",
        default: "100",
        description: "Rotation radius",
      },
      {
        prop: "fontSize",
        type: "number",
        default: "16",
        description: "Font size",
      },
    ];