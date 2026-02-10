# Adding a Component (Registry v2)

This project renders each component page from a **central registry**.

A component is “wired up” when these pieces exist:

- Component implementation (in `src/components/...`)
- Code snippet (in `src/storybook/code-snippets/<slug>.ts`)
- Registry files:
  - `src/storybook/registry/render/<slug>.tsx`
  - `src/storybook/registry/controls/<slug>.ts` (optional)
  - `src/storybook/registry/api/<slug>.ts` (optional)
- Registry entry in `src/storybook/registry/index.ts`

## 1) Pick a slug

- Use **kebab-case** (example: `split-text`, `radial-menu`).
- The slug must match the one in the component list and registry key.

## 2) Add the component implementation

Place the actual component under the appropriate library folder, for example:

- `src/components/reactbits/<ComponentName>.tsx`
- `src/components/shadcn/<ComponentName>.tsx`
- `src/components/jolyui/<ComponentName>.tsx`
- `src/components/animate-ui/...`
- `src/components/magicui/<ComponentName>.tsx`

## 3) Add / update the component list (data)

This repo uses `component-list.md` to generate `src/storybook/components.generated.ts`.

- Add a new line to `component-list.md` using the existing format.
- Run the generator if needed:
  - `node scripts/generate-components-data.mjs`

(If your workflow already regenerates this elsewhere, keep it consistent with the repo.)

## 4) Add the code snippet

Create a file:

- `src/storybook/code-snippets/<slug>.ts`

Export a `code` string:

```ts
export const code = `// paste the component code (or an example usage)`;
```

## 5) Add registry render

Create:

- `src/storybook/registry/render/<slug>.tsx`

Guidelines:

- Default export must be `Render`.
- Prefer typing props using `ComponentProps` so spreads stay type-safe.

Example:

```tsx
import type { ComponentProps } from "react";
import MyComponent from "@/components/.../MyComponent";

type RenderProps = ComponentProps<typeof MyComponent>;

export default function Render(props: RenderProps) {
	return (
		<div className="w-full">
			<MyComponent {...props} />
		</div>
	);
}
```

If your demo uses shared constants/demo helpers, import from:

- `src/storybook/registry/shared-demos.tsx`

## 6) Add controls (optional)

Create:

- `src/storybook/registry/controls/<slug>.ts`

```ts
import type { DemoControl } from "../types";

export const controls: DemoControl[] = [{ type: "text", param: "label", label: "Label", defaultValue: "Hello" }];
```

## 7) Add API table (optional)

Create:

- `src/storybook/registry/api/<slug>.ts`

```ts
import type { ApiProp } from "../types";

export const api: ApiProp[] = [{ prop: "label", type: "string", default: "—", description: "Button label" }];
```

## 8) Register it

Update:

- `src/storybook/registry/index.ts`

You’ll:

- Import `render`, `controls`, `api`, and `code` (code comes from `src/storybook/code-snippets/<slug>.ts`).
- Add an entry to the exported `registry` object keyed by slug.

## 9) Validate

- `npm run build`
- `npm run dev` and open `/components/<slug>`

## Notes

- Keep registry filenames exactly the same as the slug (`<slug>.ts` / `<slug>.tsx`).
- Controls values are passed into `render(props)`; if you add controls, ensure the render reads those props.
