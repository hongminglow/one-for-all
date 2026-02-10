import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "particleCount",
        type: "number",
        default: "200",
        description: "Number of particles",
      },
      {
        prop: "particleSpread",
        type: "number",
        default: "10",
        description: "Spread area of particles",
      },
      {
        prop: "speed",
        type: "number",
        default: "0.1",
        description: "Animation speed",
      },
      {
        prop: "particleBaseSize",
        type: "number",
        default: "100",
        description: "Base size of particles",
      },
      {
        prop: "moveParticlesOnHover",
        type: "boolean",
        default: "false",
        description: "Particles react to mouse",
      },
      {
        prop: "alphaParticles",
        type: "boolean",
        default: "false",
        description: "Use alpha blending",
      },
      {
        prop: "disableRotation",
        type: "boolean",
        default: "false",
        description: "Disable camera rotation",
      },
    ];