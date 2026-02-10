import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "title",
        type: "string",
        default: "How was this demo?",
        description: "Widget title",
      },
      {
        prop: "className",
        type: "string",
        default: "",
        description: "Wrapper className",
      },
    ];