import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "beforeCode",
        type: "string",
        default: "",
        description: "Before code contents",
      },
      {
        prop: "afterCode",
        type: "string",
        default: "",
        description: "After code contents",
      },
      {
        prop: "filename",
        type: "string",
        default: "example.ts",
        description: "Filename label",
      },
      {
        prop: "highlightColor",
        type: "string",
        default: "#ff3333",
        description: "Highlight color for changes",
      },
      {
        prop: "className",
        type: "string",
        default: "",
        description: "Wrapper classes",
      },
    ];