import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "boolean",
        param: "showGradients",
        label: "Show Gradients",
        defaultValue: true,
      },
      {
        type: "boolean",
        param: "enableArrowNavigation",
        label: "Arrow Nav",
        defaultValue: true,
      },
      {
        type: "boolean",
        param: "displayScrollbar",
        label: "Scrollbar",
        defaultValue: true,
      },
    ];