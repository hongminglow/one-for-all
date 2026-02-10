import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "value",
        type: "number",
        default: "0",
        description: "Value to display",
      },
      {
        prop: "fontSize",
        type: "number",
        default: "100",
        description: "Font size (px)",
      },
      {
        prop: "places",
        type: "number[]",
        default: "auto",
        description: "Digit places config",
      },
      {
        prop: "gap",
        type: "number",
        default: "8",
        description: "Gap between digits",
      },
    ];