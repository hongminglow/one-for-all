import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "words",
        type: "string[]",
        default: "[]",
        description: "Words to rotate",
      },
      {
        prop: "duration",
        type: "number",
        default: "0.5",
        description: "Transition duration (seconds)",
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