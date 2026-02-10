import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "select",
        param: "tileProvider",
        label: "Tiles",
        defaultValue: "carto-light",
        options: ["carto-light", "carto-dark", "openstreetmap"],
      },
    ];