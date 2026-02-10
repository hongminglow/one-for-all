import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "value",
        type: "number",
        default: "0",
        description: "Current value",
      },
      {
        prop: "min",
        type: "number",
        default: "0",
        description: "Minimum value",
      },
      {
        prop: "max",
        type: "number",
        default: "100",
        description: "Maximum value",
      },
      {
        prop: "gaugePrimaryColor",
        type: "string",
        default: "",
        description: "Progress stroke color",
      },
      {
        prop: "gaugeSecondaryColor",
        type: "string",
        default: "",
        description: "Remaining stroke color",
      },
      {
        prop: "className",
        type: "string",
        default: "",
        description: "Wrapper classes",
      },
    ];