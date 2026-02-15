import { ApiProp } from "../types";

export const api: ApiProp[] = [
  {
    prop: "title",
    type: "string",
    default: "Book Title",
    description: "Book title shown on the cover",
  },
  {
    prop: "author",
    type: "string",
    default: "Author Name",
    description: "Author name shown on the cover",
  },
  {
    prop: "pages",
    type: "BookPage[]",
    default: "—",
    description: "Array of pages with title and content",
  },
  {
    prop: "coverImage",
    type: "string",
    default: "—",
    description: "URL for the front cover image",
  },
  {
    prop: "width",
    type: "number | string",
    default: "350",
    description: "Width of the book",
  },
  {
    prop: "height",
    type: "number | string",
    default: "500",
    description: "Height of the book",
  },
  {
    prop: "className",
    type: "string",
    default: "—",
    description: "Additional CSS classes",
  },
];
