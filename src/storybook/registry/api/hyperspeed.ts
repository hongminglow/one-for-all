import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "effectOptions",
        type: "HyperspeedOptions",
        default: "{}",
        description: "Configuration object for Hyperspeed effect",
      },
      {
        prop: "preset",
        type: '"one" | "two" | "three" | "four" | "five" | "six"',
        default: '"one"',
        description: "Preset configuration to apply",
      },
    ];