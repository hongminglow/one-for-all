import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "beforeImg",
        type: "string",
        default: "",
        description: "URL for the foreground image",
      },
      {
        prop: "afterImg",
        type: "string",
        default: "",
        description: "URL for the background image",
      },
      {
        prop: "className",
        type: "string",
        default: "",
        description: "Wrapper classes",
      },
    ];