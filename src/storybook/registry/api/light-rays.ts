import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "raysColor",
        type: "string",
        default: "#ffffff",
        description: "Color of rays",
      },
      {
        prop: "raysSpeed",
        type: "number",
        default: "1",
        description: "Animation speed",
      },
      {
        prop: "pulsating",
        type: "boolean",
        default: "false",
        description: "Enable pulsating",
      },
      {
        prop: "mouseInfluence",
        type: "number",
        default: "0.1",
        description: "Mouse reactivity",
      },
    ];