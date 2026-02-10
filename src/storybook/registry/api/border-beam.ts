import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "size",
        type: "number",
        default: "50",
        description: "Beam square size (px)",
      },
      {
        prop: "duration",
        type: "number",
        default: "6",
        description: "Animation duration (seconds)",
      },
      {
        prop: "delay",
        type: "number",
        default: "0",
        description: "Phase offset (seconds)",
      },
      {
        prop: "reverse",
        type: "boolean",
        default: "false",
        description: "Reverse animation direction",
      },
      {
        prop: "initialOffset",
        type: "number",
        default: "0",
        description: "Initial offsetDistance (%)",
      },
      {
        prop: "borderWidth",
        type: "number",
        default: "1",
        description: "Overlay border width (px)",
      },
      {
        prop: "colorFrom",
        type: "string",
        default: "#ffaa40",
        description: "Gradient start color",
      },
      {
        prop: "colorTo",
        type: "string",
        default: "#9c40ff",
        description: "Gradient end color",
      },
      {
        prop: "transition",
        type: "Transition",
        default: "{ repeat: Infinity, ease: 'linear' }",
        description: "Motion transition override",
      },
      {
        prop: "className",
        type: "string",
        default: "",
        description: "Additional classes for the beam",
      },
    ];