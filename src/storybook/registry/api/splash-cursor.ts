import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "SIM_RESOLUTION",
        type: "number",
        default: "128",
        description: "Simulation resolution",
      },
      {
        prop: "DYE_RESOLUTION",
        type: "number",
        default: "1440",
        description: "Dye resolution",
      },
      {
        prop: "SPLAT_FORCE",
        type: "number",
        default: "6000",
        description: "Force of splash",
      },
      {
        prop: "COLOR_UPDATE_SPEED",
        type: "number",
        default: "10",
        description: "Color cycle speed",
      },
      {
        prop: "BACK_COLOR",
        type: "{r,g,b}",
        default: "{r:0.5,g:0,b:0}",
        description: "Background color",
      },
    ];