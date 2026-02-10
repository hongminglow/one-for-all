import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "borderSize",
        type: "number",
        default: "2",
        description: "Border size (px)",
      },
      {
        prop: "borderRadius",
        type: "number",
        default: "20",
        description: "Border radius (px)",
      },
      {
        prop: "neonColors",
        type: "{ firstColor: string; secondColor: string }",
        default: "{ firstColor: '#ff00aa', secondColor: '#00FFF1' }",
        description: "Neon gradient colors",
      },
      {
        prop: "className",
        type: "string",
        default: "",
        description: "Wrapper classes",
      },
      {
        prop: "children",
        type: "ReactNode",
        default: "",
        description: "Card content",
      },
    ];