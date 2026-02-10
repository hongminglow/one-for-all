import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "images",
        type: "string[]",
        default: "[]",
        description: "Image URLs used as icons",
      },
      {
        prop: "icons",
        type: "ReactNode[]",
        default: "[]",
        description: "Optional icon nodes (placeholder-rendered in this port)",
      },
      {
        prop: "size",
        type: "number",
        default: "400",
        description: "Canvas size (px)",
      },
    ];