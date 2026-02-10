import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "select",
        param: "side",
        label: "Side",
        defaultValue: "bottom",
        options: ["top", "bottom"],
      },
      {
        type: "select",
        param: "align",
        label: "Align",
        defaultValue: "center",
        options: ["start", "center", "end"],
      },
    ];