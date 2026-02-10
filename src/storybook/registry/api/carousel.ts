import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "items",
        type: "CarouselItem[]",
        default: "[]",
        description: "Array of items",
      },
      {
        prop: "baseWidth",
        type: "number",
        default: "300",
        description: "Card base width",
      },
      {
        prop: "autoplay",
        type: "boolean",
        default: "false",
        description: "Enable autoplay",
      },
      {
        prop: "autoplayDelay",
        type: "number",
        default: "3000",
        description: "Autoplay delay (ms)",
      },
      {
        prop: "loop",
        type: "boolean",
        default: "false",
        description: "Infinite loop",
      },
      {
        prop: "round",
        type: "boolean",
        default: "false",
        description: "Round styling",
      },
    ];