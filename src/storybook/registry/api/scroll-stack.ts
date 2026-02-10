import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "itemDistance",
        type: "number",
        default: "100",
        description: "Distance between items",
      },
      {
        prop: "itemScale",
        type: "number",
        default: "0.03",
        description: "Scale increment",
      },
      {
        prop: "stackPosition",
        type: "string",
        default: "20%",
        description: "Stack start position",
      },
      {
        prop: "rotationAmount",
        type: "number",
        default: "0",
        description: "Rotation on scroll",
      },
    ];