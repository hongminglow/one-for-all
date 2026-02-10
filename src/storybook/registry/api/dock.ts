import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "items",
        type: "DockItemData[]",
        default: "[]",
        description: "Dock items",
      },
      {
        prop: "distance",
        type: "number",
        default: "200",
        description: "Effect distance",
      },
      {
        prop: "magnification",
        type: "number",
        default: "70",
        description: "Magnified size",
      },
      {
        prop: "baseItemSize",
        type: "number",
        default: "50",
        description: "Base item size",
      },
    ];