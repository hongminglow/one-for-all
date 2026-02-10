import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "items",
        type: "string[]",
        default: "['Item 1', ...]",
        description: "Array of list items",
      },
      {
        prop: "onItemSelect",
        type: "(item: string, index: number) => void",
        default: "undefined",
        description: "Callback on item selection",
      },
      {
        prop: "showGradients",
        type: "boolean",
        default: "true",
        description: "Show fade gradients",
      },
      {
        prop: "enableArrowNavigation",
        type: "boolean",
        default: "true",
        description: "Enable keyboard navigation",
      },
      {
        prop: "displayScrollbar",
        type: "boolean",
        default: "true",
        description: "Show scrollbar",
      },
    ];