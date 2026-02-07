# One For All UI

A Storybook-style design system that **collects fancy, interesting UI components** from different libraries around the web and organizes them into a searchable, route-based catalog.

---

## 🎯 What this app is

- **1 component = 1 route** under `/components/[slug]`
- **Constants-driven data**: everything displayed is backed by a maintainable catalog generated from `component-list.md`
- **Command palette search**: press `Ctrl + K` to open the search modal and fuzzy-search by title/description

---

## 🚀 Getting started

```bash
npm install
npm run generate:components
npm run dev
```

Open http://localhost:3000

---

## 📦 Component Library Overview (158 Components)

We are introducing **158 carefully curated components** from 6 different UI libraries. Below is the complete component catalog organized by source library.

### Library Sources

| Library           | Website                                                                     | Description                               |
| ----------------- | --------------------------------------------------------------------------- | ----------------------------------------- |
| **React-Bits**    | [reactbits.dev](https://reactbits.dev/get-started/introduction)             | Beautiful animated components and effects |
| **Shadcn.io**     | [shadcn.io](https://www.shadcn.io/components)                               | Premium shadcn-style components           |
| **Joly UI**       | [jolyui.dev](https://www.jolyui.dev/docs/components/creative/animated-beam) | Creative and animated UI elements         |
| **Animate UI**    | [animate-ui.com](https://animate-ui.com/docs/components)                    | Motion-first component library            |
| **Magic UI**      | [magicui.design](https://magicui.design/docs/components)                    | Magical animated components               |
| **Aceternity UI** | [ui.aceternity.com](https://ui.aceternity.com/components)                   | Premium animated UI components            |

---

### 📝 React-Bits (62 Components)

<details>
<summary><strong>Text Animations (16)</strong></summary>

| #   | Component          | Description                            | URL                                                              |
| --- | ------------------ | -------------------------------------- | ---------------------------------------------------------------- |
| 1   | Split Text         | Splits heading into animated segments  | [Link](https://reactbits.dev/text-animations/split-text)         |
| 2   | Circular Text      | Text around a circle for badges/stamps | [Link](https://reactbits.dev/text-animations/circular-text)      |
| 3   | Shiny Text         | Moving highlight/shimmer effect        | [Link](https://reactbits.dev/text-animations/shiny-text)         |
| 4   | Curved Marquee     | Curved looping text animation          | [Link](https://reactbits.dev/text-animations/curved-loop)        |
| 5   | Fuzzy Text         | Fuzzy/blurred text effect              | [Link](https://reactbits.dev/text-animations/fuzzy-text)         |
| 6   | Gradient Text      | Multi-color gradient fill on text      | [Link](https://reactbits.dev/text-animations/gradient-text)      |
| 7   | Falling Text       | Text falling animation effect          | [Link](https://reactbits.dev/text-animations/falling-text)       |
| 8   | Text Cursor        | Custom text cursor effect              | [Link](https://reactbits.dev/text-animations/text-cursor)        |
| 9   | Decrypted Text     | Decryption/reveal animation            | [Link](https://reactbits.dev/text-animations/decrypted-text)     |
| 10  | Scroll Float       | Floating text on scroll                | [Link](https://reactbits.dev/text-animations/scroll-float)       |
| 11  | Scroll Reveal      | Reveal content on scroll               | [Link](https://reactbits.dev/text-animations/scroll-reveal)      |
| 12  | Rotating Text      | Rotating/cycling text animation        | [Link](https://reactbits.dev/text-animations/rotating-text)      |
| 13  | Glitch Text        | Glitchy distorted text effect          | [Link](https://reactbits.dev/text-animations/glitch-text)        |
| 14  | Scroll Velocity    | Velocity-based scroll animation        | [Link](https://reactbits.dev/text-animations/scroll-velocity)    |
| 15  | Variable Proximity | Font weight changes on proximity       | [Link](https://reactbits.dev/text-animations/variable-proximity) |
| 16  | Count Up           | Animated number counter                | [Link](https://reactbits.dev/text-animations/count-up)           |

</details>

<details>
<summary><strong>Animations & Effects (12)</strong></summary>

| #   | Component       | Description                         | URL                                                      |
| --- | --------------- | ----------------------------------- | -------------------------------------------------------- |
| 17  | Electric Border | Electric/energy border effect       | [Link](https://reactbits.dev/animations/electric-border) |
| 18  | Antigravity     | Floating antigravity physics effect | [Link](https://reactbits.dev/animations/antigravity)     |
| 19  | Logo Loop       | Infinite logo carousel loop         | [Link](https://reactbits.dev/animations/logo-loop)       |
| 20  | Target Cursor   | Target/crosshair cursor effect      | [Link](https://reactbits.dev/animations/target-cursor)   |
| 21  | Laser Flow      | Laser beam flow animation           | [Link](https://reactbits.dev/animations/laser-flow)      |
| 22  | Magnet Lines    | Magnetic line following cursor      | [Link](https://reactbits.dev/animations/magnet-lines)    |
| 23  | Ghost Cursor    | Ghost trail cursor effect           | [Link](https://reactbits.dev/animations/ghost-cursor)    |
| 24  | Click Spark     | Spark effect on click               | [Link](https://reactbits.dev/animations/click-spark)     |
| 25  | Sticker Peel    | Peeling sticker animation           | [Link](https://reactbits.dev/animations/sticker-peel)    |
| 26  | Image Trail     | Image trail following cursor        | [Link](https://reactbits.dev/animations/imawge-trail)    |
| 27  | Splash Cursor   | Splash/ripple cursor effect         | [Link](https://reactbits.dev/animations/splash-cursor)   |
| 28  | Star Border     | Animated star border                | [Link](https://reactbits.dev/animations/star-border)     |

</details>

<details>
<summary><strong>Components (17)</strong></summary>

| #   | Component        | Description                   | URL                                                       |
| --- | ---------------- | ----------------------------- | --------------------------------------------------------- |
| 29  | Animated List    | List with entrance animations | [Link](https://reactbits.dev/components/animated-list)    |
| 30  | Scroll Stack     | Stacking cards on scroll      | [Link](https://reactbits.dev/components/scroll-stack)     |
| 31  | Magic Bento      | Bento grid layout             | [Link](https://reactbits.dev/components/magic-bento)      |
| 32  | Circular Gallery | Circular image gallery        | [Link](https://reactbits.dev/components/circular-gallery) |
| 33  | Image Stack      | Stacked image component       | [Link](https://reactbits.dev/components/stack)            |
| 34  | Fluid Glass      | Glassmorphism fluid effect    | [Link](https://reactbits.dev/components/fluid-glass)      |
| 35  | Masonry          | Masonry grid layout           | [Link](https://reactbits.dev/components/masonry)          |
| 36  | Modal Viewer     | 3D Model viewer               | [Link](https://reactbits.dev/components/model-viewer)     |
| 37  | Lanyard          | Discord lanyard widget        | [Link](https://reactbits.dev/components/lanyard)          |
| 38  | Dock             | macOS-style app dock          | [Link](https://reactbits.dev/components/dock)             |
| 39  | Carousel         | Image/content carousel        | [Link](https://reactbits.dev/components/carousel)         |
| 40  | Spotlight Card   | Spotlight hover card effect   | [Link](https://reactbits.dev/components/spotlight-card)   |
| 41  | Flowing Menu     | Animated flowing menu         | [Link](https://reactbits.dev/components/flowing-menu)     |
| 42  | Elastic Slider   | Elastic/bouncy slider         | [Link](https://reactbits.dev/components/elastic-slider)   |
| 43  | Counter          | Animated counter component    | [Link](https://reactbits.dev/components/counter)          |
| 44  | Infinite Menu    | Infinite scrolling menu       | [Link](https://reactbits.dev/components/infinite-menu)    |
| 45  | Stepper          | Multi-step form stepper       | [Link](https://reactbits.dev/components/stepper)          |

</details>

<details>
<summary><strong>Backgrounds (17)</strong></summary>

| #   | Component      | Description                     | URL                                                      |
| --- | -------------- | ------------------------------- | -------------------------------------------------------- |
| 46  | Liquid Ether   | Liquid/ether flowing background | [Link](https://reactbits.dev/backgrounds/liquid-ether)   |
| 47  | Prism          | Prism light refraction effect   | [Link](https://reactbits.dev/backgrounds/prism)          |
| 48  | Dark Veil      | Dark overlay veil effect        | [Link](https://reactbits.dev/backgrounds/dark-veil)      |
| 49  | Light Pillar   | Light pillar/beam background    | [Link](https://reactbits.dev/backgrounds/light-pillar)   |
| 50  | Floating Lines | Floating animated lines         | [Link](https://reactbits.dev/backgrounds/floating-lines) |
| 51  | Light Rays     | Light ray beam effect           | [Link](https://reactbits.dev/backgrounds/light-rays)     |
| 52  | Color Bends    | Color bending gradient          | [Link](https://reactbits.dev/backgrounds/color-bends)    |
| 53  | Particles      | Particle animation background   | [Link](https://reactbits.dev/backgrounds/particles)      |
| 54  | Grid Scan      | Scanning grid animation         | [Link](https://reactbits.dev/backgrounds/grid-scan)      |
| 55  | Lightning      | Lightning bolt effect           | [Link](https://reactbits.dev/backgrounds/lightning)      |
| 56  | Galaxy         | Galaxy/space background         | [Link](https://reactbits.dev/backgrounds/galaxy)         |
| 57  | Dot Grid       | Animated dot grid               | [Link](https://reactbits.dev/backgrounds/dot-grid)       |
| 58  | Hyperspeed     | Hyperspeed/warp effect          | [Link](https://reactbits.dev/backgrounds/hyperspeed)     |
| 59  | Ballpit        | Bouncing ball pit               | [Link](https://reactbits.dev/backgrounds/ballpit)        |
| 60  | Orb            | Glowing orb background          | [Link](https://reactbits.dev/backgrounds/orb)            |
| 61  | Letter Glitch  | Glitching letters background    | [Link](https://reactbits.dev/backgrounds/letter-glitch)  |
| 62  | Grid Motion    | Motion grid animation           | [Link](https://reactbits.dev/backgrounds/grid-motion)    |

</details>

---

### 🎨 Shadcn.io (50 Components)

<details>
<summary><strong>Code & Development (4)</strong></summary>

| #   | Component   | Description                   | URL                                                  |
| --- | ----------- | ----------------------------- | ---------------------------------------------------- |
| 63  | Code Block  | Syntax highlighted code block | [Link](https://www.shadcn.io/components/code-block)  |
| 64  | Code Editor | In-browser code editor        | [Link](https://www.shadcn.io/components/code-editor) |
| 65  | Code Tabs   | Tabbed code snippets          | [Link](https://www.shadcn.io/components/code-tabs)   |
| 66  | Sandbox     | Interactive code sandbox      | [Link](https://www.shadcn.io/components/sandbox)     |

</details>

<details>
<summary><strong>Data & Productivity (4)</strong></summary>

| #   | Component     | Description                      | URL                                                    |
| --- | ------------- | -------------------------------- | ------------------------------------------------------ |
| 67  | GanttChart    | Gantt chart for project planning | [Link](https://www.shadcn.io/components/gantt)         |
| 68  | Kanban        | Kanban board component           | [Link](https://www.shadcn.io/components/kanban)        |
| 92  | Calendar      | Date calendar picker             | [Link](https://www.shadcn.io/components/calendar)      |
| 93  | Mini Calendar | Compact calendar widget          | [Link](https://www.shadcn.io/components/mini-calendar) |

</details>

<details>
<summary><strong>Device Mocks (3)</strong></summary>

| #   | Component             | Description           | URL                                                    |
| --- | --------------------- | --------------------- | ------------------------------------------------------ |
| 69  | Device Mock (Android) | Android device frame  | [Link](https://www.shadcn.io/components/android)       |
| 70  | Device Mock (iOS)     | iPhone 15 Pro frame   | [Link](https://www.shadcn.io/components/iphone-15-pro) |
| 71  | MacOS Dock            | macOS dock simulation | [Link](https://www.shadcn.io/components/mac-os-dock)   |

</details>

<details>
<summary><strong>Form & Input (6)</strong></summary>

| #   | Component    | Description            | URL                                                   |
| --- | ------------ | ---------------------- | ----------------------------------------------------- |
| 74  | Color Picker | Color selection picker | [Link](https://www.shadcn.io/components/color-picker) |
| 75  | Combobox     | Searchable dropdown    | [Link](https://www.shadcn.io/components/combobox)     |
| 76  | Dropzone     | File upload dropzone   | [Link](https://www.shadcn.io/components/dropzone)     |
| 72  | Rating       | Star rating component  | [Link](https://www.shadcn.io/components/rating)       |
| 73  | Credit Card  | Credit card form       | [Link](https://www.shadcn.io/components/credit-card)  |
| 91  | Tags         | Tag input component    | [Link](https://www.shadcn.io/components/tags)         |

</details>

<details>
<summary><strong>Media (4)</strong></summary>

| #   | Component         | Description              | URL                                                   |
| --- | ----------------- | ------------------------ | ----------------------------------------------------- |
| 77  | Image Zoom        | Zoomable image viewer    | [Link](https://www.shadcn.io/components/image-zoom)   |
| 78  | Image Crop        | Image cropping tool      | [Link](https://www.shadcn.io/components/image-crop)   |
| 94  | Comparison Slider | Before/after comparison  | [Link](https://www.shadcn.io/components/comparison)   |
| 99  | Video Player      | Video playback component | [Link](https://www.shadcn.io/components/video-player) |

</details>

<details>
<summary><strong>3D & Animation (7)</strong></summary>

| #   | Component             | Description                | URL                                                            |
| --- | --------------------- | -------------------------- | -------------------------------------------------------------- |
| 79  | 3D Card               | Perspective 3D card        | [Link](https://www.shadcn.io/components/3d-card)               |
| 80  | 3D Marquee            | 3D scrolling marquee       | [Link](https://www.shadcn.io/components/3d-marquee)            |
| 81  | Animated Cursor       | Custom animated cursor     | [Link](https://www.shadcn.io/components/animated-cursor)       |
| 82  | Animated Testimonials | Testimonial carousel       | [Link](https://www.shadcn.io/components/animated-testimonials) |
| 83  | Animated Tooltip      | Animated tooltip component | [Link](https://www.shadcn.io/components/animated-tooltip)      |
| 84  | Glimpse               | Preview on hover           | [Link](https://www.shadcn.io/components/glimpse)               |
| 89  | Marquee               | Scrolling marquee text     | [Link](https://www.shadcn.io/components/marquee)               |

</details>

<details>
<summary><strong>UI Elements (10)</strong></summary>

| #   | Component    | Description             | URL                                                   |
| --- | ------------ | ----------------------- | ----------------------------------------------------- |
| 85  | Pin List     | Pinned items list       | [Link](https://www.shadcn.io/components/pin-list)     |
| 86  | Spinner      | Loading spinner         | [Link](https://www.shadcn.io/components/spinner)      |
| 87  | Tabs         | Tab navigation          | [Link](https://www.shadcn.io/components/tabs)         |
| 88  | Banner       | Notification banner     | [Link](https://www.shadcn.io/components/banner)       |
| 90  | Avatar Group | Grouped avatars         | [Link](https://www.shadcn.io/components/avatar-group) |
| 95  | KBD          | Keyboard shortcut badge | [Link](https://www.shadcn.io/components/kbd)          |
| 96  | QR Code      | QR code generator       | [Link](https://www.shadcn.io/components/qr-code)      |
| 97  | Status       | Status indicator        | [Link](https://www.shadcn.io/components/status)       |
| 98  | Terminal     | Terminal emulator       | [Link](https://www.shadcn.io/components/terminal)     |

</details>

<details>
<summary><strong>Backgrounds & Effects (8)</strong></summary>

| #   | Component      | Description              | URL                                                      |
| --- | -------------- | ------------------------ | -------------------------------------------------------- |
| 100 | Beam Collision | Colliding beam animation | [Link](https://www.shadcn.io/background/beams-collision) |
| 101 | Confetti       | Confetti celebration     | [Link](https://www.shadcn.io/background/confetti)        |
| 102 | Fireworks      | Fireworks animation      | [Link](https://www.shadcn.io/background/fireworks)       |
| 103 | Meteors        | Meteor shower effect     | [Link](https://www.shadcn.io/background/meteors)         |
| 104 | Orbits         | Orbiting elements        | [Link](https://www.shadcn.io/background/orbits)          |
| 105 | Rain           | Rain animation           | [Link](https://www.shadcn.io/background/rain)            |
| 106 | Snow           | Snowfall effect          | [Link](https://www.shadcn.io/background/snow)            |
| 107 | Vortex         | Swirling vortex          | [Link](https://www.shadcn.io/background/vortex)          |

</details>

<details>
<summary><strong>Charts (5)</strong></summary>

| #   | Component           | Description                | URL                                                  |
| --- | ------------------- | -------------------------- | ---------------------------------------------------- |
| 108 | Gradient Area Chart | Gradient-filled area chart | [Link](https://www.shadcn.io/charts/area-gradient)   |
| 109 | Horizontal Bar      | Horizontal bar chart       | [Link](https://www.shadcn.io/charts/bar-horizontal)  |
| 110 | Interactive Bar     | Interactive bar chart      | [Link](https://www.shadcn.io/charts/bar-interactive) |
| 111 | Pie Donut           | Donut/pie chart            | [Link](https://www.shadcn.io/charts/pie-donut)       |
| 112 | Radar Chart         | Radar/spider chart         | [Link](https://www.shadcn.io/charts/radar-dots)      |

</details>

---

### ✨ Joly UI (17 Components)

<details>
<summary><strong>Click to expand</strong></summary>

| #   | Component             | Description                 | URL                                                                                |
| --- | --------------------- | --------------------------- | ---------------------------------------------------------------------------------- |
| 113 | Rainbow Button        | Gradient rainbow button     | [Link](https://www.jolyui.dev/docs/components/buttons/rainbow-button)              |
| 114 | Gooey Text Morphing   | Gooey text morph effect     | [Link](https://www.jolyui.dev/docs/components/text-animations/gooey-text-morphing) |
| 115 | Highlight Text        | Text highlighting animation | [Link](https://www.jolyui.dev/docs/components/text-animations/highlight-text)      |
| 116 | Number Counter        | Animated number counter     | [Link](https://www.jolyui.dev/docs/components/text-animations/number-counter)      |
| 117 | Rotate Text           | Rotating text animation     | [Link](https://www.jolyui.dev/docs/components/text-animations/rotate-text)         |
| 118 | Typewriter Text       | Typewriter typing effect    | [Link](https://www.jolyui.dev/docs/components/text-animations/typewritter-text)    |
| 119 | AI Prompt Box         | AI chat prompt input        | [Link](https://www.jolyui.dev/docs/components/inputs/ai-prompt-box)                |
| 120 | Animated Theme Toggle | Dark/light theme toggle     | [Link](https://www.jolyui.dev/docs/components/inputs/animated-theme-toggle)        |
| 121 | Calendar Input        | Calendar date input         | [Link](https://www.jolyui.dev/docs/components/inputs/calendar)                     |
| 122 | Date Wheel Picker     | Wheel-style date picker     | [Link](https://www.jolyui.dev/docs/components/inputs/date-wheel-picker)            |
| 123 | Feedback Widget       | User feedback collector     | [Link](https://www.jolyui.dev/docs/components/inputs/feedback-widget)              |
| 124 | File Tree             | File system tree view       | [Link](https://www.jolyui.dev/docs/components/navigation/file-tree)                |
| 125 | Animated Beam         | Animated connecting beam    | [Link](https://www.jolyui.dev/docs/components/creative/animated-beam)              |
| 126 | Expanded Map          | Expandable map component    | [Link](https://www.jolyui.dev/docs/components/creative/expanded-map)               |
| 127 | Github Star           | GitHub star button          | [Link](https://www.jolyui.dev/docs/components/creative/github-star)                |
| 128 | Hover Preview         | Link preview on hover       | [Link](https://www.jolyui.dev/docs/components/creative/hover-preview)              |
| 129 | Image Sphere          | 3D image sphere             | [Link](https://www.jolyui.dev/docs/components/creative/image-sphere)               |

</details>

---

### 🎬 Animate UI (14 Components)

<details>
<summary><strong>Click to expand</strong></summary>

| #   | Component        | Description               | URL                                                                       |
| --- | ---------------- | ------------------------- | ------------------------------------------------------------------------- |
| 130 | Popover          | Animated popover          | [Link](https://animate-ui.com/docs/components/radix/popover)              |
| 131 | Progress         | Animated progress bar     | [Link](https://animate-ui.com/docs/components/radix/progress)             |
| 132 | Sheet            | Slide-out sheet panel     | [Link](https://animate-ui.com/docs/components/radix/sheet)                |
| 133 | Copy Button      | Copy to clipboard button  | [Link](https://animate-ui.com/docs/components/buttons/copy)               |
| 134 | Flip Button      | Flipping button animation | [Link](https://animate-ui.com/docs/components/buttons/flip)               |
| 135 | Ripple Button    | Ripple effect button      | [Link](https://animate-ui.com/docs/components/buttons/ripple)             |
| 136 | Hole Background  | Hole/mask background      | [Link](https://animate-ui.com/docs/components/backgrounds/hole)           |
| 137 | Flip Card        | 3D flip card              | [Link](https://animate-ui.com/docs/components/community/flip-card)        |
| 138 | Management Bar   | Action management bar     | [Link](https://animate-ui.com/docs/components/community/management-bar)   |
| 139 | Motion Carousel  | Motion-based carousel     | [Link](https://animate-ui.com/docs/components/community/motion-carousel)  |
| 140 | Playful TodoList | Animated todo list        | [Link](https://animate-ui.com/docs/components/community/playful-todolist) |
| 141 | Radial Intro     | Radial intro animation    | [Link](https://animate-ui.com/docs/components/community/radial-intro)     |
| 142 | Radial Menu      | Radial action menu        | [Link](https://animate-ui.com/docs/components/community/radial-menu)      |

</details>

---

### 🪄 Magic UI (12 Components)

<details>
<summary><strong>Click to expand</strong></summary>

| #   | Component             | Description                | URL                                                                           |
| --- | --------------------- | -------------------------- | ----------------------------------------------------------------------------- |
| 143 | Icon Cloud            | Floating icon cloud        | [Link](https://magicui.design/docs/components/icon-cloud)                     |
| 144 | Border Beam           | Animated border beam       | [Link](https://magicui.design/docs/components/border-beam)                    |
| 145 | Shine Border          | Shining border effect      | [Link](https://magicui.design/docs/components/shine-border)                   |
| 146 | Magic Card            | Gradient hover card        | [Link](https://magicui.design/docs/components/magic-card)                     |
| 147 | Compact Confetti      | Confetti burst effect      | [Link](https://magicui.design/docs/components/confetti)                       |
| 148 | Video Text            | Video inside text          | [Link](https://magicui.design/docs/components/video-text)                     |
| 149 | Text Reveal           | Scroll text reveal         | [Link](https://magicui.design/docs/components/text-reveal)                    |
| 150 | Sparkles Text         | Sparkles on text           | [Link](https://magicui.design/docs/components/sparkles-text)                  |
| 151 | Code Comparison       | Side-by-side code diff     | [Link](https://magicui.design/docs/components/code-comparison)                |
| 152 | Scroll Progress       | Scroll position indicator  | [Link](https://magicui.design/docs/components/scroll-progress)                |
| 153 | Neon Gradient Card    | Neon gradient card         | [Link](https://magicui.design/docs/components/neon-gradient-card)             |
| 154 | Circular Progress Bar | Animated circular progress | [Link](https://magicui.design/docs/components/animated-circular-progress-bar) |

</details>

---

### 🌟 Aceternity UI (4 Components)

<details>
<summary><strong>Click to expand</strong></summary>

| #   | Component      | Description                | URL                                                         |
| --- | -------------- | -------------------------- | ----------------------------------------------------------- |
| 155 | Draggable Card | Draggable card component   | [Link](https://ui.aceternity.com/components/draggable-card) |
| 156 | Hero Parallax  | Parallax hero section      | [Link](https://ui.aceternity.com/components/hero-parallax)  |
| 157 | Image Compare  | Before/after image compare | [Link](https://ui.aceternity.com/components/compare)        |
| 158 | Lens           | Magnifying lens effect     | [Link](https://ui.aceternity.com/components/lens)           |

</details>

---

## 📋 Adding New Components - Standard Operating Procedure (SOP)

This guide walks you through the complete process of adding a new component to the One For All UI Storybook system.

### Overview

```
┌─────────────────────────────────────────────────────────────────┐
│  Step 1: Add to component-list.md                              │
├─────────────────────────────────────────────────────────────────┤
│  Step 2: Run npm run generate:components                       │
├─────────────────────────────────────────────────────────────────┤
│  Step 3: Create component file under src/components/[library]  │
├─────────────────────────────────────────────────────────────────┤
│  Step 4: Add demo in demo-registry.tsx                         │
├─────────────────────────────────────────────────────────────────┤
│  Step 5: Add code snippet in code-snippets.ts                  │
├─────────────────────────────────────────────────────────────────┤
│  Step 6: Test and verify                                       │
└─────────────────────────────────────────────────────────────────┘
```

---

### Step 1: Add Component to `component-list.md`

Open the `component-list.md` file in the project root and add your new component following this exact format:

```markdown
159. New Component Name : https://source-library.com/path/to/component
```

**Important notes:**

- The number should be sequential (next available number)
- Use proper spacing: `Name : URL` (space before and after the colon)
- The URL should point to the component's documentation page
- The title will be used to generate the slug (e.g., "New Component Name" → `new-component-name`)

**Example:**

```markdown
159. Animated Modal : https://magicui.design/docs/components/animated-modal
```

---

### Step 2: Regenerate Component Constants

Run the generator script to update the auto-generated TypeScript files:

```bash
npm run generate:components
```

This command will:

- Parse `component-list.md`
- Generate `src/storybook/components.generated.ts` with component metadata
- Auto-detect the library from the URL
- Generate tags, descriptions, and slugs

**Verify the output:**

```
Generated 159 components → src/storybook/components.generated.ts
```

---

### Step 3: Create the Component File

Create the component implementation in the appropriate library folder under `src/components/`:

```
src/components/
├── animateui/       # Components from Animate UI
├── jolyui/          # Components from Joly UI
├── magicui/         # Components from Magic UI
├── reactbits/       # Components from React-Bits
├── shadcn/          # Components from Shadcn.io
├── tsdefault/       # Custom/default implementations
└── ui/              # Shared UI primitives
```

**Example:** For a Magic UI component, create:

```
src/components/magicui/AnimatedModal.tsx
```

**Component template:**

```tsx
"use client";

import React from "react";
// Import any required dependencies

interface AnimatedModalProps {
  // Define your props here
  children?: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

export default function AnimatedModal({
  children,
  isOpen = false,
  onClose,
}: AnimatedModalProps) {
  // Component implementation
  return (
    <div className="animated-modal">
      {/* Your component JSX */}
      {children}
    </div>
  );
}
```

---

### Step 4: Register the Demo in `demo-registry.tsx`

Open `src/storybook/demos/demo-registry.tsx` and add your component demo:

#### 4.1 Import the component at the top:

```tsx
import AnimatedModal from "@/components/magicui/AnimatedModal";
```

#### 4.2 Import the code snippet (after adding it in Step 5):

```tsx
import {
  // ... other imports
  animatedModalCode,
} from "@/storybook/demos/code-snippets";
```

#### 4.3 Add a case in the `renderDemo` function:

Find the `renderDemo` function and add a new case:

```tsx
case slug.includes("animated-modal") || title.includes("animated modal"):
  return (
    <AnimatedModal
      isOpen={props?.isOpen ?? true}
      onClose={props?.onClose ?? (() => {})}
      {...props}
    >
      <div className="p-4">
        <h2>Modal Content</h2>
        <p>This is an animated modal demo.</p>
      </div>
    </AnimatedModal>
  );
```

**Matching logic:**

- Use `slug.includes("your-slug")` for slug-based matching
- Use `title.includes("component name")` as a fallback
- The slug is auto-generated from the component name in `component-list.md`

---

### Step 5: Add Code Snippet in `code-snippets.ts`

Open `src/storybook/demos/code-snippets.ts` and add the code snippet:

```tsx
export const animatedModalCode = `import AnimatedModal from "@/components/magicui/AnimatedModal";

function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Open Modal
      </button>
      <AnimatedModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div className="p-4">
          <h2>Hello World</h2>
        </div>
      </AnimatedModal>
    </>
  );
}`;
```

---

### Step 6: Test and Verify

#### 6.1 Start the development server:

```bash
npm run dev
```

#### 6.2 Navigate to your component:

Open your browser and go to:

```
http://localhost:3000/components/animated-modal
```

#### 6.3 Verify functionality:

- [ ] Component renders correctly in the **Preview** tab
- [ ] Code snippet displays in the **Code** tab
- [ ] Component appears in the sidebar navigation
- [ ] Command palette search (`Ctrl + K`) finds the component
- [ ] Tags and description are correct
- [ ] Link to upstream documentation works

---

### Troubleshooting

| Issue                            | Solution                                                 |
| -------------------------------- | -------------------------------------------------------- |
| Component not showing in sidebar | Run `npm run generate:components` again                  |
| Slug not matching                | Check the case in `renderDemo` uses correct slug pattern |
| Import errors                    | Verify file path and export in component file            |
| Demo not rendering               | Check console for errors, verify props                   |
| Search not finding component     | Regenerate components and restart dev server             |

---

### File Reference Summary

| File                                    | Purpose                                         |
| --------------------------------------- | ----------------------------------------------- |
| `component-list.md`                     | Master list of all components (source of truth) |
| `src/storybook/components.generated.ts` | Auto-generated component metadata               |
| `src/components/[library]/`             | Component implementations by library            |
| `src/storybook/demos/demo-registry.tsx` | Demo rendering logic                            |
| `src/storybook/demos/code-snippets.ts`  | Code snippets for display                       |
| `src/storybook/storybook-constants.ts`  | UI constants and category definitions           |

---

## 🔄 Updating the Component Catalog

To update existing components or regenerate all data:

1. Edit `component-list.md`
2. Regenerate the constants file:

```bash
npm run generate:components
```

This outputs `src/storybook/components.generated.ts` which powers routing + search.

---

## 📝 Notes on Third-Party Libraries

This project links out to upstream documentation/demo pages.
Local previews are implemented as a lightweight wrapper demo and do not copy third-party component source code.

---

## 🤝 Contributing

1. Fork the repository
2. Add your component following the SOP above
3. Test thoroughly
4. Submit a pull request

---

**Happy building! 🚀**
