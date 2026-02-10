import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "number",
        param: "magnification",
        label: "Magnification",
        defaultValue: 70,
        min: 40,
        max: 140,
        step: 2,
      },
      {
        type: "number",
        param: "distance",
        label: "Distance",
        defaultValue: 200,
        min: 60,
        max: 400,
        step: 5,
      },
      {
        type: "number",
        param: "panelHeight",
        label: "Panel Height",
        defaultValue: 68,
        min: 40,
        max: 120,
        step: 2,
      },
      {
        type: "number",
        param: "dockHeight",
        label: "Dock Height",
        defaultValue: 256,
        min: 120,
        max: 500,
        step: 10,
      },
      {
        type: "number",
        param: "baseItemSize",
        label: "Base Item Size",
        defaultValue: 50,
        min: 28,
        max: 90,
        step: 1,
      },
    ];