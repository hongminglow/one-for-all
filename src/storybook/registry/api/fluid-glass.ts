import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "mode",
        type: "'lens' | 'bar' | 'cube'",
        default: "lens",
        description: "Display mode",
      },
      {
        prop: "lensProps",
        type: "ModeProps",
        default: "{}",
        description: "Props for lens mode",
      },
      {
        prop: "barProps",
        type: "ModeProps",
        default: "{}",
        description: "Props for bar mode",
      },
      {
        prop: "cubeProps",
        type: "ModeProps",
        default: "{}",
        description: "Props for cube mode",
      },
    ];