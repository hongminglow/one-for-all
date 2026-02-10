import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "value",
        type: "Date",
        default: "new Date()",
        description: "Selected date",
      },
      {
        prop: "onChange",
        type: "(value: Date) => void",
        default: "",
        description: "Called on selection",
      },
      {
        prop: "className",
        type: "string",
        default: "",
        description: "Wrapper className",
      },
    ];