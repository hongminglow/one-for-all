import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "items",
        type: "{image: string, text: string}[]",
        default: "[]",
        description: "Gallery items",
      },
      {
        prop: "bend",
        type: "number",
        default: "3",
        description: "Curvature amount",
      },
      {
        prop: "textColor",
        type: "string",
        default: "#ffffff",
        description: "Text color",
      },
      {
        prop: "borderRadius",
        type: "number",
        default: "0.05",
        description: "Image border radius",
      },
      {
        prop: "scrollSpeed",
        type: "number",
        default: "2",
        description: "Scroll sensitivity",
      },
    ];