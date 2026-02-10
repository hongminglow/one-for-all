import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "topColor",
        type: "string",
        default: "#5227FF",
        description: "Top gradient color",
      },
      {
        prop: "bottomColor",
        type: "string",
        default: "#FF9FFC",
        description: "Bottom gradient color",
      },
      {
        prop: "intensity",
        type: "number",
        default: "1.0",
        description: "Light intensity",
      },
      {
        prop: "pillarWidth",
        type: "number",
        default: "3.0",
        description: "Width of the pillar",
      },
      {
        prop: "quality",
        type: "'low' | 'medium' | 'high'",
        default: "high",
        description: "Rendering quality",
      },
    ];