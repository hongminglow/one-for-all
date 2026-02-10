import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "items",
        type: "{ id: string; title: string; description?: string; image?: string }[]",
        default: "[]",
        description: "Carousel slides",
      },
      {
        prop: "autoplay",
        type: "boolean",
        default: "false",
        description: "Auto-advance slides",
      },
      {
        prop: "autoplayDelay",
        type: "number",
        default: "2800",
        description: "Autoplay delay (ms)",
      },
    ];