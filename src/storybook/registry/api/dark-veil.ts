import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "hueShift",
        type: "number",
        default: "0",
        description: "Hue shift amount",
      },
      {
        prop: "noiseIntensity",
        type: "number",
        default: "0",
        description: "Noise level",
      },
      {
        prop: "scanlineIntensity",
        type: "number",
        default: "0",
        description: "Scanline opacity",
      },
      {
        prop: "warpAmount",
        type: "number",
        default: "0",
        description: "Warp distortion",
      },
    ];