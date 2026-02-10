import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "texts",
        type: "string[]",
        default: "[]",
        description: "Text items to morph between",
      },
      {
        prop: "duration",
        type: "number",
        default: "1.5",
        description: "Animation duration (seconds)",
      },
      {
        prop: "pauseDuration",
        type: "number",
        default: "2",
        description: "Pause between words (seconds)",
      },
      {
        prop: "className",
        type: "string",
        default: "",
        description: "Wrapper className",
      },
    ];