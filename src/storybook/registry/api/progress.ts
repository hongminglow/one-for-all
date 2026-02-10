import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "value",
        type: "number",
        default: "0",
        description: "Current value",
      },
      {
        prop: "max",
        type: "number",
        default: "100",
        description: "Maximum value",
      },
      {
        prop: "className",
        type: "string",
        default: "",
        description: "Wrapper classes",
      },
    ];