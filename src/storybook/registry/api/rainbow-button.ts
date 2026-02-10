import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "colors",
        type: "string[]",
        default: "(preset)",
        description: "Conic-gradient color stops",
      },
      {
        prop: "duration",
        type: "number",
        default: "2",
        description: "Rotation duration (seconds)",
      },
      {
        prop: "borderWidth",
        type: "number",
        default: "2",
        description: "Border thickness (px)",
      },
      {
        prop: "animated",
        type: "boolean",
        default: "true",
        description: "Enable gradient rotation",
      },
      {
        prop: "...buttonProps",
        type: "ButtonHTMLAttributes",
        default: "",
        description: "Standard button props",
      },
    ];