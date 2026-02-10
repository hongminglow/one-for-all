import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "value",
        type: "Date",
        default: "new Date()",
        description: "Current value",
      },
      {
        prop: "onChange",
        type: "(date: Date) => void",
        default: "",
        description: "Called when date changes",
      },
      {
        prop: "minYear",
        type: "number",
        default: "1970",
        description: "Minimum year",
      },
      {
        prop: "maxYear",
        type: "number",
        default: "(current+10)",
        description: "Maximum year",
      },
      {
        prop: "size",
        type: "'sm' | 'md' | 'lg'",
        default: "md",
        description: "Control size",
      },
      {
        prop: "disabled",
        type: "boolean",
        default: "false",
        description: "Disable all selects",
      },
      {
        prop: "locale",
        type: "string",
        default: "",
        description: "Intl locale for month names",
      },
      {
        prop: "className",
        type: "string",
        default: "",
        description: "Wrapper className",
      },
    ];