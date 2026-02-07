# One-for-All UI Components

## Overview

This repository contains a collection of 158+ UI components from various libraries, including React Bits, Joly UI, Magic UI, and Animate UI, integrated into a single Storybook environment.

## Libraries & Components

### React Bits

- AnimatedList
- Ballpit
- Carousel
- CircularGallery
- CircularText
- ClickSpark
- ColorBends
- CountUp
- Counter
- CurvedLoop
- DarkVeil
- DecryptedText
- Dock
- DotGrid
- ElasticSlider
- ElectricBorder
- FallingText
- FloatingLines
- FlowingMenu
- FluidGlass
- FuzzyText
- Galaxy
- GhostCursor
- GlitchText
- GradientText
- GridMotion
- GridScan
- Hyperspeed
- ImageTrail
- InfiniteMenu
- Lanyard
- LaserFlow
- LetterGlitch
- LightPillar
- LightRays
- Lightning
- LiquidEther
- LogoLoop
- MagicBento
- MagnetLines
- Masonry
- ModalViewer
- ModelViewer
- Orb
- Particles
- Prism
- RotatingText
- ScrollFloat
- ScrollReveal
- ScrollStack
- ScrollVelocity
- ShinyText
- SplashCursor
- SplitText
- SpotlightCard
- Stack
- StarBorder
- Stepper
- StickerPeel
- TargetCursor
- TextCursor
- VariableProximity

### Joly UI

- AIPromptBox
- AnimatedBeam
- AnimatedThemeToggle
- DateWheelPicker
- ExpandedMap
- FeedbackWidget
- FileTree
- GitHubStarButton
- GooeyTextMorphing
- HighlightText
- HoverPreview
- ImageSphere
- NumberCounter
- RainbowButton
- RotateText
- TypewriterText

### Animate UI

- CopyButton
- FlipButton
- FlipCard
- HoleBackground
- Magnet
- ManagementBar
- MotionCarousel
- PlayfulTodoList
- Popover
- Progress
- RadialIntro
- RadialMenu
- RippleButton
- Sheet

### Magic UI

- BorderBeam
- CircularProgressBar
- CodeComparison
- CompactConfetti
- IconCloud
- MagicCard
- NeonGradientCard
- ScrollProgress
- ShineBorder
- SparklesText
- TextReveal
- VideoText

### UI (Shadcn/Base)

- 3D Card
- 3D Marquee
- Animated Cursor
- Animated Testimonials
- Animated Tooltip
- Beam Collision
- Button
- CodeBlock
- CodeEditor
- CodeTabs
- Color Picker
- Combobox
- Credit Card
- Compare
- DraggableCard
- Dropzone
- GanttChart
- Glimpse
- HeroParallax
- Image Crop
- Image Zoom
- InputGroup
- Input
- iPhone & Android Mockups
- Kanban
- Lens
- MacOS Dock
- Pin List
- Rating
- Sandbox
- Sparkles
- Spinner
- Status Indicator
- Tabs
- Terminal
- Textarea
- Video Player
- Confetti
- Fireworks
- Meteors
- Orbits
- Rain
- Snow
- Vortex
- Area Gradient Chart
- Bar Horizontal Chart
- Bar Interactive Chart
- Pie Donut Chart
- Radar Dots Chart

## SOP for Adding New Components

1.  **Create Component File**:
    - Navigate to the appropriate directory (e.g., `src/components/reactbits`).
    - Create a `.tsx` file for the component and a corresponding `.css` file if needed.
    - Ensure the component exports a default or named export compatible with the registry.

2.  **Implement Component**:
    - Paste the component code.
    - Install new dependencies if required (check `package.json` and run `npm install`).
    - Verify imports/exports.

3.  **Register Component**:
    - Open `src/storybook/demos/demo-registry.tsx`.
    - Import the new component (e.g., `import NewComponent from '../../components/reactbits/NewComponent';`).
    - Add a new `case` in the `renderDemo` function matching the component's slug or title.
    - Return the component wrapped in a container with appropriate props.

4.  **Verify in Storybook**:
    - Run `npm run dev`.
    - Navigate to the component's story in the Storybook UI to ensure it renders correctly.

5.  **Documentation**:
    - Update this README if necessary.

## Troubleshooting

- **Hydration Errors**: ensure components using `window` or DOM elements are wrapped in `useEffect` or use `'use client'` if in Next.js app directory (though this is Storybook).
- **Missing Modules**: Run `npm install` for any missing packages like `three`, `gsap`, `framer-motion`, etc.
