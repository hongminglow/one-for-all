import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "gradientSize",
        type: "number",
        default: "200",
        description: "Radial gradient size (px)",
      },
      {
        prop: "gradientOpacity",
        type: "number",
        default: "0.8",
        description: "Overlay opacity",
      },
      {
        prop: "gradientFrom",
        type: "string",
        default: "#9E7AFF",
        description: "Gradient start color",
      },
      {
        prop: "gradientTo",
        type: "string",
        default: "#FE8BBB",
        description: "Gradient end color",
      },
      {
        prop: "gradientColor",
        type: "string",
        default: "#262626",
        description: "Dark inner gradient color",
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