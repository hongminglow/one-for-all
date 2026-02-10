import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "hue",
        type: "number",
        default: "230",
        description: "Hue of the lightning color",
      },
      {
        prop: "xOffset",
        type: "number",
        default: "0",
        description: "Horizontal offset",
      },
      {
        prop: "speed",
        type: "number",
        default: "1",
        description: "Animation speed",
      },
      {
        prop: "intensity",
        type: "number",
        default: "1",
        description: "Brightness intensity",
      },
      {
        prop: "size",
        type: "number",
        default: "1",
        description: "Scale of the noise pattern",
      },
    ];