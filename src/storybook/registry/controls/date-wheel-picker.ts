import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "select",
        param: "size",
        label: "Size",
        defaultValue: "md",
        options: ["sm", "md", "lg"],
      },
      {
        type: "boolean",
        param: "disabled",
        label: "Disabled",
        defaultValue: false,
      },
    ];