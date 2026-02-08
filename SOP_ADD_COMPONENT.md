# Standard Operating Procedure (SOP) for Adding New UI Components

This guide outlines the steps to add a new UI component to the "One for All" Storybook project.

## 1. Preparation

- **Identify the Source**: Determine where the component is coming from (e.g., Shadcn UI, React Bits, Magic UI, Aceternity UI, etc.).
- **Check Dependencies**: specific libraries (e.g., `framer-motion`, `lucide-react`, `clsx`, `tailwind-merge`) are installed. Run `npm install <package_name>` if needed.
- **Directories**:
  - Components go into `src/components/<library-name>/`.
  - Demos go into `src/storybook/demos/demo-registry.tsx` (or are co-located if simple).
  - Registry mapping is in `src/storybook/demos/demo-registry.tsx`.

## 2. Component Implementation

1. **Create Component File**:
   - Navigate to `src/components/<library-name>/`.
   - Create a new file, e.g., `MyComponent.tsx`.
   - Paste the component code.
2. **Adjust Imports**:
   - Ensure imports like `cn` utility point to `@/lib/utils`.
   - Fix standard imports (e.g., use `lucide-react` for icons).
   - If the component uses `motion` from `framer-motion`, ensure it's imported correctly.
3. **Export**:
   - Ensure the main component is exported.
   - If there is a "Demo" or "Example" in the source, export it as a named export `Demo` or similar, to be used in the registry.

## 3. Registering the Component

1. **Open Registry**:
   - Go to `src/storybook/demos/demo-registry.tsx`.
2. **Import Component**:
   - Import your component at the top.
   - If using a demo, import the demo specifically: `import { Demo as MyComponentDemo } from "@/components/<library>/MyComponent";`
3. **Add to Registry Switch**:
   - Locate any existing `switch` statement or mapping logic (currently mostly `renderDemo` function).
   - Add a `case` for your component slug/title.
   - Return the component JSX.
   ```tsx
   case slug.includes("my-component") || title.includes("my component"):
     return (
       <div className="w-full py-10 flex justify-center">
         <MyComponentDemo />
       </div>
     );
   ```

   - **Note**: Ensure the slug matches what is defined in `component-list.md` or the database source.

## 4. Documentation

1. **Update Component List**:
   - Add the new component to `component-list.md` under the appropriate library section.
   - Format: `No. Name : URL`
2. **Update README**:
   - If `README.md` contains a specific list, update it there as well.

## 5. Verification

1. **Run Storybook/Dev Server**:
   - Run `npm run dev` to start the application.
2. **Check UI**:
   - Navigate to the component in the sidebar.
   - Verify it renders correctly and interactive elements work.
   - Check the console for any errors (hydration, unique keys, etc.).

## 6. Troubleshooting Common Issues

- **Hydration Errors**: Ensure components using `window` or specific browser APIs are client-side only (`"use client"` directive).
- **Import Errors**: Check paths, especially `@/lib/utils`.
- **Style Issues**: Verify Tailwind classes are picking up (configuration in `tailwind.config.js`).
