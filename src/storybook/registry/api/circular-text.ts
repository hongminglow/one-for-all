import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "text",
        type: "string",
        default: "",
        description: "Text to display",
      },
      {
        prop: "spinDuration",
        type: "number",
        default: "20",
        description: "Rotation duration (s)",
      },
      {
        prop: "onHover",
        type: "'slowDown' | 'speedUp' | 'pause' | 'goBonkers'",
        default: "speedUp",
        description: "Hover behavior",
      },
    ];