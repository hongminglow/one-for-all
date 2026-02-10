import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "options",
        type: "ConfettiOptions",
        default: "{}",
        description: "Default fire options",
      },
      {
        prop: "globalOptions",
        type: "ConfettiGlobalOptions",
        default: "{ resize: true, useWorker: true }",
        description: "Canvas confetti global options",
      },
      {
        prop: "manualStart",
        type: "boolean",
        default: "false",
        description: "If false, fires once on mount",
      },
      {
        prop: "className",
        type: "string",
        default: "",
        description: "Canvas className",
      },
    ];