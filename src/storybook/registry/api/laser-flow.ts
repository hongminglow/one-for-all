import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "color",
        type: "string",
        default: "#FF79C6",
        description: "Laser color",
      },
      {
        prop: "flowSpeed",
        type: "number",
        default: "0.35",
        description: "Flow animation speed",
      },
      {
        prop: "wispDensity",
        type: "number",
        default: "1",
        description: "Density of wisps",
      },
      {
        prop: "fogIntensity",
        type: "number",
        default: "0.45",
        description: "Fog effect intensity",
      },
      {
        prop: "decay",
        type: "number",
        default: "1.1",
        description: "Beam decay factor",
      },
    ];