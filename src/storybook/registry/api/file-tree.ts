import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "tree",
        type: "FileTreeNode[]",
        default: "[]",
        description: "Tree data",
      },
      {
        prop: "className",
        type: "string",
        default: "",
        description: "Wrapper className",
      },
    ];