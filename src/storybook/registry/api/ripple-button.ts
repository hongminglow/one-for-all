import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "rippleColor",
        type: "string",
        default: "rgba(255,255,255,0.35)",
        description: "Ripple overlay color",
      },
      {
        prop: "children",
        type: "ReactNode",
        default: "",
        description: "Button contents",
      },
    ];