import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "count",
        type: "number",
        default: "300",
        description: "Number of particles",
      },
      {
        prop: "magnetRadius",
        type: "number",
        default: "10",
        description: "Mouse interaction radius",
      },
      {
        prop: "ringRadius",
        type: "number",
        default: "10",
        description: "Formation ring radius",
      },
      {
        prop: "waveSpeed",
        type: "number",
        default: "0.4",
        description: "Wave animation speed",
      },
      {
        prop: "waveAmplitude",
        type: "number",
        default: "1",
        description: "Wave height amplitude",
      },
      {
        prop: "color",
        type: "string",
        default: "#FF9FFC",
        description: "Particle color",
      },
      {
        prop: "autoAnimate",
        type: "boolean",
        default: "false",
        description: "Enable auto-animation",
      },
    ];