import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "holeSize",
        type: "number",
        default: "220",
        description: "Hole radius (px)",
      },
      {
        prop: "className",
        type: "string",
        default: "",
        description: "Wrapper classes",
      },
    ];