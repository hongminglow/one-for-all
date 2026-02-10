import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "text",
        param: "placeholder",
        label: "Placeholder",
        defaultValue: "Ask me anything…",
      },
      {
        type: "boolean",
        param: "isLoading",
        label: "Loading",
        defaultValue: false,
      },
    ];