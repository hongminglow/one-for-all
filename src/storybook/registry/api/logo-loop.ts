import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "logos",
        type: "LogoItem[]",
        default: "[]",
        description: "Array of logo objects",
      },
      {
        prop: "speed",
        type: "number",
        default: "120",
        description: "Scroll speed",
      },
      {
        prop: "direction",
        type: "'left' | 'right' | 'up' | 'down'",
        default: "left",
        description: "Scroll direction",
      },
      {
        prop: "pauseOnHover",
        type: "boolean",
        default: "false",
        description: "Pause on mouse hover",
      },
      {
        prop: "gap",
        type: "number",
        default: "32",
        description: "Gap between logos",
      },
    ];