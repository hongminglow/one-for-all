import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "text",
        type: "string",
        default: "",
        description: "Text to animate",
      },
      {
        prop: "delay",
        type: "number",
        default: "50",
        description: "Delay between letters (ms)",
      },
      {
        prop: "animateOn",
        type: "'view' | 'hover'",
        default: "view",
        description: "Animation trigger",
      },
    ];