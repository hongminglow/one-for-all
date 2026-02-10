import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "open",
        type: "boolean",
        default: "false",
        description: "Whether the sheet is open",
      },
      {
        prop: "onOpenChange",
        type: "(open: boolean) => void",
        default: "",
        description: "Called when open state changes",
      },
      {
        prop: "side",
        type: "'left' | 'right'",
        default: "right",
        description: "Slide-in side",
      },
      {
        prop: "title",
        type: "string",
        default: "Sheet",
        description: "Header title",
      },
      {
        prop: "children",
        type: "ReactNode",
        default: "",
        description: "Sheet content",
      },
    ];