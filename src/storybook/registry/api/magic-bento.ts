import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "enableSpotlight",
        type: "boolean",
        default: "true",
        description: "Enable mouse spotlight",
      },
      {
        prop: "enableStars",
        type: "boolean",
        default: "true",
        description: "Enable particle stars",
      },
      {
        prop: "enableTilt",
        type: "boolean",
        default: "false",
        description: "Enable tilt effect",
      },
      {
        prop: "glowColor",
        type: "string",
        default: "132, 0, 255",
        description: "RGB glow color",
      },
    ];