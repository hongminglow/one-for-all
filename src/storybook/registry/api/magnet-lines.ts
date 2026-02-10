import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "rows",
        type: "number",
        default: "9",
        description: "Number of rows",
      },
      {
        prop: "columns",
        type: "number",
        default: "9",
        description: "Number of columns",
      },
      {
        prop: "lineColor",
        type: "string",
        default: "#efefef",
        description: "Line color",
      },
      {
        prop: "lineWidth",
        type: "string",
        default: "1vmin",
        description: "Line width",
      },
      {
        prop: "baseAngle",
        type: "number",
        default: "-10",
        description: "Initial rotation angle",
      },
    ];