import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "items",
        type: "{ label: string; onSelect?: () => void }[]",
        default: "[]",
        description: "Menu items",
      },
      {
        prop: "radius",
        type: "number",
        default: "90",
        description: "Distance from center (px)",
      },
    ];