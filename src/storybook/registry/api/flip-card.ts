import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "front",
        type: "ReactNode",
        default: "",
        description: "Front side content",
      },
      {
        prop: "back",
        type: "ReactNode",
        default: "",
        description: "Back side content",
      },
      {
        prop: "className",
        type: "string",
        default: "",
        description: "Wrapper classes",
      },
    ];