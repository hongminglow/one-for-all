import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "number",
        param: "SIM_RESOLUTION",
        label: "Sim Res",
        defaultValue: 128,
      },
      {
        type: "number",
        param: "DYE_RESOLUTION",
        label: "Dye Res",
        defaultValue: 1024,
      },
      {
        type: "number",
        param: "DENSITY_DISSIPATION",
        label: "Density Dissipation",
        defaultValue: 1,
        step: 0.1,
      },
      {
        type: "number",
        param: "VELOCITY_DISSIPATION",
        label: "Velocity Dissipation",
        defaultValue: 0.2,
        step: 0.1,
      },
      {
        type: "number",
        param: "PRESSURE",
        label: "Pressure",
        defaultValue: 0.8,
        step: 0.1,
      },
      { type: "number", param: "CURL", label: "Curl", defaultValue: 30 },
      {
        type: "number",
        param: "SPLAT_RADIUS",
        label: "Splat Radius",
        defaultValue: 0.25,
        step: 0.01,
      },
      {
        type: "number",
        param: "SPLAT_FORCE",
        label: "Splat Force",
        defaultValue: 6000,
      },
      {
        type: "boolean",
        param: "SHADING",
        label: "Shading",
        defaultValue: true,
      },
    ];