import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "text",
        type: "string",
        default: "",
        description: "Text written to clipboard on click",
      },
      {
        prop: "label",
        type: "string",
        default: "Copy",
        description: "Button label",
      },
      {
        prop: "copiedLabel",
        type: "string",
        default: "Copied",
        description: "Label shown briefly after copying",
      },
      {
        prop: "onCopiedChange",
        type: "(copied: boolean) => void",
        default: "",
        description: "Fires when copy status changes",
      },
    ];