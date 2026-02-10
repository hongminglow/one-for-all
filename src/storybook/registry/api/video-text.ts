import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "src",
        type: "string",
        default: "",
        description: "Video source URL",
      },
      {
        prop: "children",
        type: "ReactNode",
        default: "",
        description: "Text rendered as the mask",
      },
      {
        prop: "fontSize",
        type: "string | number",
        default: "20",
        description: "Mask text size (vw when number)",
      },
      {
        prop: "fontWeight",
        type: "string | number",
        default: "bold",
        description: "Mask font weight",
      },
      {
        prop: "className",
        type: "string",
        default: "",
        description: "Wrapper classes",
      },
    ];