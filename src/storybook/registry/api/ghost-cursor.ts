import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "trailLength",
        type: "number",
        default: "50",
        description: "Length of the trail",
      },
      {
        prop: "inertia",
        type: "number",
        default: "0.5",
        description: "Movement inertia",
      },
      {
        prop: "grainIntensity",
        type: "number",
        default: "0.05",
        description: "Film grain intensity",
      },
      {
        prop: "bloomStrength",
        type: "number",
        default: "0.1",
        description: "Bloom effect strength",
      },
      {
        prop: "color",
        type: "string",
        default: "#B19EEF",
        description: "Trail color",
      },
    ];