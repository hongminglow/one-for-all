import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "placeholder",
        type: "string",
        default: "Ask something…",
        description: "Textarea placeholder",
      },
      {
        prop: "disabled",
        type: "boolean",
        default: "false",
        description: "Disable input",
      },
      {
        prop: "isLoading",
        type: "boolean",
        default: "false",
        description: "Show loading state",
      },
      {
        prop: "onSubmit",
        type: "(value: string) => void",
        default: "",
        description: "Called when submitting",
      },
      {
        prop: "className",
        type: "string",
        default: "",
        description: "Wrapper className",
      },
    ];