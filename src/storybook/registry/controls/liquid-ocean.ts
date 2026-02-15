import { DemoControl } from "../types";

export const controls: DemoControl[] = [
  {
    type: "number",
    param: "waveAmplitude",
    label: "Wave Amplitude",
    defaultValue: 0.2,
    min: 0,
    max: 1,
    step: 0.1,
  },
  {
    type: "number",
    param: "oceanSize",
    label: "Ocean Size",
    defaultValue: 25,
    min: 10,
    max: 100,
  },
  {
    type: "boolean",
    param: "showBoats",
    label: "Show Boats",
    defaultValue: true,
  },
  {
    type: "boolean",
    param: "showWireframe",
    label: "Show Wireframe",
    defaultValue: true,
  },
];
