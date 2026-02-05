# One For All UI

A Storybook-style design system that **collects fancy, interesting UI components** from different libraries around the web and organizes them into a searchable, route-based catalog.

## What this app is

- **1 component = 1 route** under `/components/[slug]`
- **Constants-driven data**: everything displayed is backed by a maintainable catalog generated from `component-list.md`
- **Command palette search**: press `Ctrl + K` to open the search modal and fuzzy-search by title/description

## Getting started

```bash
npm install
npm run generate:components
npm run dev
```

Open http://localhost:3000

## Updating the component catalog

1. Edit `component-list.md`
2. Regenerate the constants file:

```bash
npm run generate:components
```

This outputs `src/storybook/components.generated.ts` which powers routing + search.

## Notes on third‑party libraries

This project links out to upstream documentation/demo pages.
Local previews are implemented as a lightweight wrapper demo and do not copy third‑party component source code.
