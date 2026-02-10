import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "trigger",
        type: "ReactNode",
        default: "",
        description: "Trigger element",
      },
      {
        prop: "content",
        type: "ReactNode",
        default: "",
        description: "Popover content",
      },
      {
        prop: "open",
        type: "boolean",
        default: "(uncontrolled)",
        description: "Controlled open state",
      },
      {
        prop: "defaultOpen",
        type: "boolean",
        default: "false",
        description: "Uncontrolled initial state",
      },
      {
        prop: "onOpenChange",
        type: "(open: boolean) => void",
        default: "",
        description: "Open state change callback",
      },
      {
        prop: "side",
        type: "'top' | 'bottom'",
        default: "bottom",
        description: "Panel side",
      },
      {
        prop: "align",
        type: "'start' | 'center' | 'end'",
        default: "center",
        description: "Panel alignment",
      },
    ];