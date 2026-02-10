import { DemoControl } from "../types";

export const controls: DemoControl[] = [
      {
        type: "boolean",
        param: "textAutoHide",
        label: "Text Auto Hide",
        defaultValue: true,
      },
      {
        type: "boolean",
        param: "enableStars",
        label: "Stars",
        defaultValue: true,
      },
      {
        type: "boolean",
        param: "enableSpotlight",
        label: "Spotlight",
        defaultValue: true,
      },
      {
        type: "boolean",
        param: "enableBorderGlow",
        label: "Border Glow",
        defaultValue: true,
      },
      {
        type: "boolean",
        param: "enableTilt",
        label: "Tilt",
        defaultValue: false,
      },
      {
        type: "boolean",
        param: "enableMagnetism",
        label: "Magnetism",
        defaultValue: true,
      },
      {
        type: "color",
        param: "glowColor",
        label: "Glow Color",
        defaultValue: "132, 0, 255",
      },
    ];