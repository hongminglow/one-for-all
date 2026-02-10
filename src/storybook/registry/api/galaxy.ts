import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "focal",
        type: "[number, number]",
        default: "[0.5, 0.5]",
        description: "Focal point coordinates",
      },
      {
        prop: "starSpeed",
        type: "number",
        default: "0.5",
        description: "Speed of stars",
      },
      {
        prop: "density",
        type: "number",
        default: "1",
        description: "Star density",
      },
      {
        prop: "hueShift",
        type: "number",
        default: "140",
        description: "Color hue shift",
      },
      {
        prop: "mouseInteraction",
        type: "boolean",
        default: "true",
        description: "Enable interaction with mouse",
      },
    ];