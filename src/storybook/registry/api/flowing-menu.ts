import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "items",
        type: "MenuItemData[]",
        default: "[]",
        description: "Menu items",
      },
      {
        prop: "speed",
        type: "number",
        default: "15",
        description: "Marquee speed",
      },
      {
        prop: "textColor",
        type: "string",
        default: "#fff",
        description: "Text color",
      },
      {
        prop: "bgColor",
        type: "string",
        default: "#060010",
        description: "Background color",
      },
    ];