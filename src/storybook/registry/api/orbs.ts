import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "hue",
        type: "number",
        default: "0",
        description: "Base hue rotation for colors",
      },
      {
        prop: "hoverIntensity",
        type: "number",
        default: "0.2",
        description: "Intensity of distortion on hover",
      },
      {
        prop: "rotateOnHover",
        type: "boolean",
        default: "true",
        description: "Whether to rotate the orb on hover",
      },
      {
        prop: "forceHoverState",
        type: "boolean",
        default: "false",
        description: "Force the hover state always on",
      },
      {
        prop: "backgroundColor",
        type: "string",
        default: "'#000000'",
        description: "Background color hex",
      },
    ];