import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "baseOpacity",
        type: "number",
        default: "0.1",
        description: "Initial opacity of text",
      },
      {
        prop: "enableBlur",
        type: "boolean",
        default: "true",
        description: "Whether to apply blur effect",
      },
      {
        prop: "baseRotation",
        type: "number",
        default: "3",
        description: "Initial rotation in degrees",
      },
      {
        prop: "blurStrength",
        type: "number",
        default: "4",
        description: "Strength of the blur",
      },
    ];