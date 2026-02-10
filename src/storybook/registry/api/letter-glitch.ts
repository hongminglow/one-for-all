import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "glitchColors",
        type: "string[]",
        default: "['#2b4539', '#61dca3', '#61b3dc']",
        description: "Array of colors for the glitch effect",
      },
      {
        prop: "glitchSpeed",
        type: "number",
        default: "50",
        description: "Speed of the glitch animation (ms)",
      },
      {
        prop: "centerVignette",
        type: "boolean",
        default: "false",
        description: "Enable center vignette effect",
      },
      {
        prop: "outerVignette",
        type: "boolean",
        default: "true",
        description: "Enable outer vignette effect",
      },
      {
        prop: "smooth",
        type: "boolean",
        default: "true",
        description: "Enable smooth color transitions",
      },
    ];