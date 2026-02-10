import { ApiProp } from "../types";

export const api: ApiProp[] = [
      {
        prop: "location",
        type: "string",
        default: "San Francisco, CA",
        description: "Label shown in the card",
      },
      {
        prop: "latitude",
        type: "number",
        default: "37.7749",
        description: "Latitude",
      },
      {
        prop: "longitude",
        type: "number",
        default: "-122.4194",
        description: "Longitude",
      },
      {
        prop: "zoom",
        type: "number",
        default: "14",
        description: "Tile zoom level",
      },
      {
        prop: "tileProvider",
        type: "'openstreetmap' | 'carto-light' | 'carto-dark'",
        default: "carto-light",
        description: "Map tile provider",
      },
    ];