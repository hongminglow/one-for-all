# Standard Operating Procedure (SOP) for Adding New Components

## 1. Identify Component Source

Determine the library or source of the component (e.g., React Bits, Magic UI, Shadcn UI, Aceternity UI). This determines the directory where the component file should be placed.

## 2. Create Component File

- **Directory**: Navigate to the appropriate folder in `src/components/`:
  - `src/components/reactbits/` for React Bits
  - `src/components/magicui/` for Magic UI
  - `src/components/shadcn/` for Shadcn UI
  - `src/components/jolyui/` for Joly UI
  - `src/components/animateui/` for Animate UI
- **File Creation**: Create a `.tsx` file named after the component (e.g., `NewComponent.tsx`).
- **Styles**: If the component has specific CSS, create a `.css` file in the same directory and import it.

## 3. Implement Component Code

- **Paste Code**: Copy the component code into the `.tsx` file.
- **Directives**: If the component uses browser-specific APIs (e.g., `window`, `document`, hooks), ensure `"use client";` is added at the top of the file.
- **Dependencies**: Check imports and install any missing packages using `npm install`. Common dependencies include `framer-motion`, `three`, `gsap`, `lucide-react`, `clsx`, `tailwind-merge`.

## 4. Register in Demo Registry

To make the component visible in the application/Storybook:

1.  Open `src/storybook/demos/demo-registry.tsx`.
2.  **Import**: Add an import statement for the new component at the top.
    ```typescript
    import NewComponent from "@/components/library/NewComponent";
    ```
3.  **Add Case**: Scroll to the `renderDemo` function and add a new `case` in the switch statement. use `slug.includes("component-slug")` to match.
    ```tsx
    case slug.includes("new-component") || title.includes("new component"):
      return (
        <div className="w-full max-w-[600px]">
          <NewComponent {...props} />
        </div>
      );
    ```
    _Note: Adjust the container div classes (e.g., height, width, background) to best showcase the component._

## 5. Verify Implementation

- Run the development server: `npm run dev`.
- Navigate to the component in the application UI.
- Verify that it renders correctly and is responsive.
- Check the console for any hydration errors or warnings.

## 6. Update Documentation

- Add the new component to the list in `README.md`.
- Update `component-list.md` if tracking progress there.
