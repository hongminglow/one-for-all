import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "text",
        type: "string",
        default: "",
        description: "Text to decrypt",
      },
      {
        prop: "speed",
        type: "number",
        default: "50",
        description: "Decryption speed (ms)",
      },
      {
        prop: "sequential",
        type: "boolean",
        default: "false",
        description: "Decrypt sequentially",
      },
      {
        prop: "animateOn",
        type: "'view' | 'hover' | 'both'",
        default: "view",
        description: "Animation trigger",
      },
    ];