import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "words",
        type: "string[]",
        default: "[]",
        description: "Words to type/delete",
      },
      {
        prop: "typingSpeed",
        type: "number",
        default: "100",
        description: "Typing speed (ms/char)",
      },
      {
        prop: "deletingSpeed",
        type: "number",
        default: "50",
        description: "Deleting speed (ms/char)",
      },
      {
        prop: "pauseDuration",
        type: "number",
        default: "1500",
        description: "Pause when word completes (ms)",
      },
      {
        prop: "cursorClassName",
        type: "string",
        default: "",
        description: "Cursor className",
      },
      {
        prop: "className",
        type: "string",
        default: "",
        description: "Wrapper className",
      },
    ];