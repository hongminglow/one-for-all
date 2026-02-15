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
    param: "shipCount",
    label: "Ship Count",
    defaultValue: 20,
    min: 0,
    max: 100,
  },
  {
    type: "number",
    param: "speed",
    label: "Animation Speed",
    defaultValue: 0.001,
    min: 0.0001,
    max: 0.01,
    step: 0.0001,
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
  {
    type: "boolean",
    param: "autoRotate",
    label: "Auto Rotate",
    defaultValue: true,
  },
];
