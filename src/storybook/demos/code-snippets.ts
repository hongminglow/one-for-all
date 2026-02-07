export const splitTextCode = `import SplitText from './SplitText';

<SplitText
  text="Elevate Your Web Experience"
  className="text-2xl font-semibold text-center"
  delay={50}
  animationFrom={{ opacity: 0, transform: "translate3d(0,40px,0)" }}
  animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
  easing="easeOutCubic"
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
/>`;

export const circularTextCode = `import CircularText from './CircularText';

<CircularText
  text="REACT*BITS*COMPONENTS*"
  onHover="speedUp"
  spinDuration={20}
  className="custom-class"
/>`;

export const dockCode = `import Dock from './Dock';

<Dock
  items={[
    { icon: '🏠', label: 'Home', onClick: () => {} },
    { icon: '🔍', label: 'Search', onClick: () => {} },
    { icon: '📁', label: 'Files', onClick: () => {} },
    { icon: '⚙️', label: 'Settings', onClick: () => {} },
  ]}
  magnification={70}
  distance={200}
  panelHeight={68}
  dockHeight={256}
  baseItemSize={50}
/>`;

export const carouselCode = `import Carousel from './Carousel';

<Carousel
  baseWidth={320}
  autoplay={false}
  autoplayDelay={3000}
  pauseOnHover={false}
  loop={false}
  round={false}
/>`;

export const spotlightCardCode = `import SpotlightCard from './SpotlightCard';

<SpotlightCard spotlightColor="rgba(255, 255, 255, 0.25)">
  <h3 style={{ margin: 0 }}>Spotlight Card</h3>
  <p style={{ marginTop: 8, opacity: 0.8 }}>Move your mouse around.</p>
</SpotlightCard>`;

export const flowingMenuCode = `import FlowingMenu from './FlowingMenu';

<FlowingMenu
  items={[
    {
      link: '#',
      text: 'React Bits',
      image: 'https://images.unsplash.com/photo-1526481280695-3c687fd643ed?q=80&w=800&auto=format',
    },
    {
      link: '#',
      text: 'Components',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format',
    },
    {
      link: '#',
      text: 'Backgrounds',
      image: 'https://images.unsplash.com/photo-1519681393784-d8e5b5a45771?q=80&w=800&auto=format',
    },
  ]}
  speed={15}
/>`;

export const elasticSliderCode = `import ElasticSlider from './ElasticSlider';

<ElasticSlider
  defaultValue={50}
  startingValue={0}
  maxValue={100}
  isStepped={false}
  stepSize={1}
/>`;

export const counterCode = `import Counter from './Counter';

<Counter
  value={1234.56}
  fontSize={56}
  padding={8}
  gap={8}
/>`;

export const infiniteMenuCode = `import InfiniteMenu from './InfiniteMenu';

<InfiniteMenu
  items={[{ id: 1, title: 'Item 1' }, { id: 2, title: 'Item 2' }]}
  scale={1.0}
/>`;

export const stepperCode = `import Stepper, { Step } from './Stepper';

<Stepper initialStep={1}>
  <Step>
    <h3 style={{ margin: 0 }}>Step 1</h3>
    <p style={{ marginTop: 8, opacity: 0.8 }}>Intro content.</p>
  </Step>
  <Step>
    <h3 style={{ margin: 0 }}>Step 2</h3>
    <p style={{ marginTop: 8, opacity: 0.8 }}>More details.</p>
  </Step>
  <Step>
    <h3 style={{ margin: 0 }}>Step 3</h3>
    <p style={{ marginTop: 8, opacity: 0.8 }}>Finish.</p>
  </Step>
</Stepper>`;

export const liquidEtherCode = `import LiquidEther from './LiquidEther';

<div style={{ height: 220, width: '100%', position: 'relative' }}>
  <LiquidEther resolution={1} />
</div>`;

export const prismCode = `import Prism from './Prism';

<div style={{ height: 220, width: '100%', position: 'relative' }}>
  <Prism animationType="rotate" glow={1} noise={0.5} />
</div>`;

export const darkVeilCode = `import DarkVeil from './DarkVeil';

<div style={{ height: 220, width: '100%', position: 'relative' }}>
  <DarkVeil hueShift={0} noiseIntensity={0} scanlineIntensity={0} speed={0.5} />
</div>`;

export const lightPillarCode = `import LightPillar from './LightPillar';

<div style={{ height: 220, width: '100%', position: 'relative' }}>
  <LightPillar topColor="#5227FF" bottomColor="#FF9FFC" intensity={1} interactive={false} />
</div>`;

export const floatingLinesCode = `import FloatingLines from './FloatingLines';

<div style={{ height: 220, width: '100%', position: 'relative' }}>
  <FloatingLines interactive animationSpeed={1} />
</div>`;

export const lightRaysCode = `import LightRays from './LightRays';

<div style={{ height: 220, width: '100%', position: 'relative' }}>
  <LightRays raysOrigin="top-center" raysColor="#ffffff" followMouse mouseInfluence={0.1} />
</div>`;

export const colorBendsCode = `import ColorBends from './ColorBends';

<div style={{ height: 220, width: '100%', position: 'relative' }}>
  <ColorBends rotation={45} speed={0.2} transparent={true} />
</div>`;

export const particlesCode = `import Particles from './Particles';

<div style={{ height: 220, width: '100%', position: 'relative' }}>
  <Particles count={70} speed={0.6} linkDistance={120} />
</div>`;

export const gridScanCode = `import GridScan from './GridScan';

<div style={{ height: 220, width: '100%', position: 'relative' }}>
  <GridScan size={44} opacity={0.12} scanSpeed={2.2} />
</div>`;

export const lightningCode = `import Lightning from './Lightning';

<div style={{ height: 220, width: '100%', position: 'relative' }}>
  <Lightning frequency={1.1} speed={1} glow={10} />
</div>`;

export const galaxyCode = `import Galaxy from './Galaxy';

<div style={{ height: 220, width: '100%', position: 'relative' }}>
  <Galaxy stars={900} rotationSpeed={0.25} />
</div>`;

export const dotGridCode = `import DotGrid from './DotGrid';

<div style={{ height: 220, width: '100%', position: 'relative' }}>
  <DotGrid spacing={22} dotSize={2} opacity={0.18} />
</div>`;

export const hyperspeedCode = `import Hyperspeed from './Hyperspeed';

<div style={{ height: 220, width: '100%', position: 'relative' }}>
  <Hyperspeed streaks={260} speed={1} />
</div>`;

export const ballpitCode = `import Ballpit from './Ballpit';

<div style={{ height: 220, width: '100%', position: 'relative' }}>
  <Ballpit balls={18} gravity={0.45} bounce={0.86} />
</div>`;

export const orbCode = `import Orb from './Orb';

<div style={{ height: 220, width: '100%', position: 'relative' }}>
  <Orb speed={1} glow={0.85} />
</div>`;

export const letterGlitchCode = `import LetterGlitch from './LetterGlitch';

<div style={{ height: 220, width: '100%', position: 'relative' }}>
  <LetterGlitch text="LETTER GLITCH" speed={22} glitchChance={0.18} />
</div>`;

export const gridMotionCode = `import GridMotion from './GridMotion';

<div style={{ height: 220, width: '100%', position: 'relative' }}>
  <GridMotion gridSize={28} speed={1} amplitude={8} />
</div>`;

export const rainbowButtonCode = `import RainbowButton from './RainbowButton';

<RainbowButton duration={2} borderWidth={2}>
  Rainbow Button
</RainbowButton>`;

export const gooeyTextMorphingCode = `import GooeyTextMorphing from './GooeyTextMorphing';

<GooeyTextMorphing
  texts={['Joly UI', 'One-for-all', 'Storybook']}
  duration={1.2}
  pauseDuration={1.2}
/>`;

export const highlightTextCode = `import HighlightText from './HighlightText';

<HighlightText duration={0.5} delay={0.1}>
  Highlight me
</HighlightText>`;

export const numberCounterCode = `import NumberCounter from './NumberCounter';

<NumberCounter value={1234.56} precision={2} />`;

export const rotateTextCode = `import RotateText from './RotateText';

<RotateText words={['Fast', 'Simple', 'Polished']} pauseDuration={1.2} />`;

export const typewriterTextJolyCode = `import TypewriterText from './TypewriterText';

<TypewriterText
  words={['Typewriter', 'Animation', 'Effect']}
  typingSpeed={90}
  deletingSpeed={50}
  pauseDuration={1200}
/>`;

export const aiPromptBoxCode = `import AIPromptBox from './AIPromptBox';

<AIPromptBox
  placeholder="Ask me anything…"
  onSubmit={(value) => console.log(value)}
/>`;

export const animatedThemeToggleCode = `import AnimatedThemeToggle from './AnimatedThemeToggle';

<AnimatedThemeToggle />`;

export const dateWheelPickerCode = `import DateWheelPicker from './DateWheelPicker';

<DateWheelPicker
  value={new Date()}
  onChange={(d) => console.log(d)}
  size="md"
/>`;

export const feedbackWidgetCode = `import FeedbackWidget from './FeedbackWidget';

<FeedbackWidget title="How was this?" />`;

export const fileTreeCode = `import FileTree from './FileTree';

<FileTree
  tree={[
    { type: 'folder', name: 'src', children: [
      { type: 'folder', name: 'components', children: [
        { type: 'file', name: 'Button.tsx' },
        { type: 'file', name: 'Card.tsx' },
      ]},
      { type: 'file', name: 'app.tsx' },
    ]},
  ]}
/>`;

export const animatedBeamCode = `import AnimatedBeam from './AnimatedBeam';

// Use refs to connect two nodes inside a shared container.
// See demo-registry for a working example.`;

export const expandedMapCode = `import ExpandedMap from './ExpandedMap';

<ExpandedMap
  location="San Francisco, CA"
  latitude={37.7749}
  longitude={-122.4194}
  tileProvider="carto-light"
/>`;

export const githubStarCode = `import GitHubStarButton from './GitHubStarButton';

<GitHubStarButton owner="vercel" repo="next.js" />`;

export const hoverPreviewCode = `import { HoverPreviewProvider, HoverPreviewLink } from './HoverPreview';

<HoverPreviewProvider
  data={{
    one: { image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&auto=format&fit=crop&q=60', title: 'Preview', subtitle: 'Hover me' },
  }}
>
  <HoverPreviewLink previewKey="one">Hover Preview</HoverPreviewLink>
</HoverPreviewProvider>`;

export const imageSphereCode = `import ImageSphere from './ImageSphere';

<ImageSphere
  images={[
    { id: '1', src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&auto=format&fit=crop&q=60', alt: 'One' },
    { id: '2', src: 'https://images.unsplash.com/photo-1526481280695-3c687fd643ed?w=400&auto=format&fit=crop&q=60', alt: 'Two' },
    { id: '3', src: 'https://images.unsplash.com/photo-1519681393784-d8e5b5a45771?w=400&auto=format&fit=crop&q=60', alt: 'Three' },
  ]}
/>`;

export const shadcnCalendarCode = `import Calendar from './Calendar';

<Calendar value={new Date()} onChange={(d) => console.log(d)} />`;

export const shinyTextCode = `import ShinyText from './ShinyText';

<ShinyText
  text="✨ Shiny Text Effect"
  speed={2}
  delay={0}
  color="#b5b5b5"
  shineColor="#ffffff"
  spread={120}
  direction="left"
  yoyo={false}
  pauseOnHover={false}
/>`;

export const curvedLoopCode = `import CurvedLoop from './CurvedLoop';

<CurvedLoop
  marqueeText="CURVED LOOP • CURVED LOOP •"
  curveAmount={400}
  speed={2}
  direction="left"
  interactive={true}
  className="text-[32px] font-black"
/>`;

export const fuzzyTextCode = `import FuzzyText from './FuzzyText';

<FuzzyText
  baseIntensity={0.2}
  hoverIntensity={0.5}
  enableHover
>
  404
</FuzzyText>`;

export const gradientTextCode = `import GradientText from './GradientText'

<GradientText
  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
  animationSpeed={8}
  showBorder={false}
  className="custom-class"
>
  Add a splash of color!
</GradientText>`;

export const fallingTextCode = `import FallingText from './FallingText';

<FallingText
  text="React Bits is a library of animated and interactive React components designed to streamline UI development and simplify your workflow."
  highlightWords={["React", "Bits", "animated", "components", "simplify"]}
  trigger="hover"
  backgroundColor="transparent"
  wireframes={false}
  gravity={0.56}
  fontSize="2rem"
  mouseConstraintStiffness={0.9}
/>`;

export const textCursorCode = `import TextCursor from './TextCursor';

<TextCursor
  text="⚛️"
  spacing={80}
  followMouseDirection
  randomFloat
  exitDuration={0.3}
  removalInterval={20}
  maxPoints={10}
/>`;

export const decryptedTextCode = `import DecryptedText from './DecryptedText';

<DecryptedText
  text="Hover me!"
  speed={60}
  maxIterations={10}
  characters="ABCD1234!?"
  className="revealed"
/>`;

export const scrollFloatCode = `import ScrollFloat from './ScrollFloat';

<ScrollFloat
  animationDuration={1}
  ease='back.inOut(2)'
  scrollStart='center bottom+=50%'
  scrollEnd='bottom bottom-=40%'
  stagger={0.03}
>
  React Bits
</ScrollFloat>`;

export const scrollRevealCode = `import ScrollReveal from './ScrollReveal';

<ScrollReveal
  baseOpacity={0.1}
  enableBlur={true}
  baseRotation={3}
  blurStrength={10}
>
  React Bits
</ScrollReveal>`;

export const rotatingTextCode = `import RotatingText from './RotatingText';

<RotatingText
  texts={['React', 'Bits', 'Animated']}
  mainClassName="px-2 bg-cyan-300 text-black overflow-hidden py-0.5 justify-center rounded-lg"
  staggerDuration={0.025}
  rotationInterval={2000}
/>`;

export const glitchTextCode = `import GlitchText from './GlitchText';

<GlitchText
  text="GLITCH"
  speed={1}
  enableHover={true}
  className="custom-class"
/>`;

export const scrollVelocityCode = `import ScrollVelocity from './ScrollVelocity';

<ScrollVelocity
  texts={['Scroll Velocity', 'React Bits']}
  velocity={100}
  className="custom-class"
/>`;

export const variableProximityCode = `import { useRef } from 'react';
import VariableProximity from './VariableProximity';

const containerRef = useRef(null);

<div
  ref={containerRef}
  style={{position: 'relative'}}
>
  <VariableProximity
    label={'Hover me! And then star React Bits on GitHub, or else...'}
    className={'variable-proximity-demo'}
    fromFontVariationSettings="'wght' 400, 'opsz' 9"
    toFontVariationSettings="'wght' 1000, 'opsz' 40"
    containerRef={containerRef}
    radius={100}
    falloff='linear'
  />
</div>`;

export const countUpCode = `import CountUp from './CountUp'

<CountUp
  from={0}
  to={100}
  separator=","
  direction="up"
  duration={1}
  className="count-up-text"
/>`;

export const electricBorderCode = `import ElectricBorder from './ElectricBorder';

<ElectricBorder
  color="#7df9ff"
  speed={1}
  chaos={0.12}
  borderRadius={16}
>
  <div style={{ padding: '24px', background: '#111', color: '#fff' }}>
    <p>A glowing, animated border wrapper.</p>
  </div>
</ElectricBorder>`;

export const antigravityCode = `import Antigravity from './Antigravity';

<div style={{ width: '100%', height: '400px', position: 'relative' }}>
  <Antigravity
    count={300}
    magnetRadius={6}
    ringRadius={7}
    waveSpeed={0.4}
    waveAmplitude={1}
    particleSize={1.5}
    lerpSpeed={0.05}
    color="#5227FF"
    autoAnimate
    particleVariance={1}
    rotationSpeed={0}
    depthFactor={1}
    pulseSpeed={3}
    particleShape="capsule"
    fieldStrength={10}
  />
</div>`;

export const logoLoopCode = `import LogoLoop from './LogoLoop';

const techLogos = [
  { src: "https://reactbits.dev/logos/react.svg", alt: "React", href: "https://react.dev" },
  { src: "https://reactbits.dev/logos/nextjs.svg", alt: "Next.js", href: "https://nextjs.org" },
  { src: "https://reactbits.dev/logos/typescript.svg", alt: "TypeScript", href: "https://www.typescriptlang.org" },
  { src: "https://reactbits.dev/logos/tailwindcss.svg", alt: "Tailwind CSS", href: "https://tailwindcss.com" },
];

<div style={{ height: '120px', width: '100%', position: 'relative' }}>
  <LogoLoop
    logos={techLogos}
    speed={100}
    direction="left"
    logoHeight={40}
    gap={40}
    hoverSpeed={0}
    scaleOnHover={true}
    fadeOut={true}
  />
</div>`;

export const targetCursorCode = `import TargetCursor from './TargetCursor';

<TargetCursor
  targetSelector=".cursor-target"
  spinDuration={2}
  hideDefaultCursor={true}
  hoverDuration={0.2}
  parallaxOn={true}
/>

<div
  className="cursor-target"
  style={{ padding: '2rem', border: '1px solid #ccc', borderRadius: '8px' }}
>
  Hover over me to see the target cursor lock in!
</div>`;

export const laserFlowCode = `import LaserFlow from './LaserFlow';

<div style={{ width: '100%', height: '400px', background: '#000', position: 'relative' }}>
  <LaserFlow
    color="#FF79C6"
    wispDensity={1}
    fogIntensity={0.45}
    horizontalSizing={0.5}
    verticalSizing={2.0}
  />
</div>`;

export const magnetLinesCode = `import MagnetLines from './MagnetLines';

<div style={{ width: '100%', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  <MagnetLines
    rows={9}
    columns={9}
    containerSize="40vmin"
    lineColor="#efefef"
    lineWidth="1vmin"
    lineHeight="6vmin"
    baseAngle={-10}
  />
</div>`;

export const ghostCursorCode = `import GhostCursor from './GhostCursor';

<div style={{ width: '100%', height: '400px', background: '#000', position: 'relative', overflow: 'hidden' }}>
  <GhostCursor
    color="#B19EEF"
    brightness={2}
    trailLength={50}
    grainIntensity={0.05}
  />
  <div style={{ padding: '2rem', color: '#fff' }}>
    Move your mouse to see the ghost cursor!
  </div>
</div>`;

export const clickSparkCode = `import ClickSpark from './ClickSpark';

<ClickSpark
  sparkColor='#fff'
  sparkSize={10}
  sparkRadius={15}
  sparkCount={8}
  duration={400}
>
  <div style={{ width: '100%', height: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#111', borderRadius: '12px' }}>
    <h2 style={{ color: '#fff' }}>Click anywhere!</h2>
  </div>
</ClickSpark>`;

export const stickerPeelCode = `import StickerPeel from './StickerPeel';

<div style={{ width: '100%', minHeight: '400px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  <StickerPeel
    imageSrc="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=500&auto=format&fit=crop&q=60"
    width={300}
    rotate={15}
    peelBackHoverPct={30}
    peelBackActivePct={40}
    shadowIntensity={0.6}
    lightingIntensity={0.1}
    peelDirection={0}
  />
</div>`;

export const splashCursorCode = `import SplashCursor from './SplashCursor';

<SplashCursor />`;

export const starBorderCode = `import StarBorder from './StarBorder';

<div style={{ padding: '20px', background: '#000', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px' }}>
  <StarBorder color="cyan" speed="3s">
    <div style={{ color: 'white', padding: '1em 2em' }}>Hover Me</div>
  </StarBorder>
</div>`;

export const animatedListCode = `import AnimatedList from './AnimatedList';

<div style={{ width: '100%', height: '500px', display: 'flex', justifyContent: 'center' }}>
  <AnimatedList
    items={['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8']}
    onItemSelect={(item, index) => console.log(item, index)}
    showGradients={true}
    enableArrowNavigation={true}
    displayScrollbar={true}
  />
</div>`;

export const scrollStackCode = `import ScrollStack, { ScrollStackItem } from './ScrollStack';

<div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <ScrollStack itemDistance={50} itemScale={0.05} itemStackDistance={20}>
    <ScrollStackItem
      itemClassName="bg-[#111] text-white flex items-center justify-center text-xl font-bold border border-white/10"
    >
      Item 1
    </ScrollStackItem>
    <ScrollStackItem
      itemClassName="bg-[#111] text-white flex items-center justify-center text-xl font-bold border border-white/10"
    >
      Item 2
    </ScrollStackItem>
    <ScrollStackItem
      itemClassName="bg-[#111] text-white flex items-center justify-center text-xl font-bold border border-white/10"
    >
      Item 3
    </ScrollStackItem>
    <ScrollStackItem
      itemClassName="bg-[#111] text-white flex items-center justify-center text-xl font-bold border border-white/10"
    >
      Item 4
    </ScrollStackItem>
  </ScrollStack>
</div>`;

export const magicBentoCode = `import MagicBento from './MagicBento';

<div style={{ width: '100%', minHeight: '600px', background: '#030014' }}>
  <MagicBento
    textAutoHide={true}
    enableStars={true}
    enableSpotlight={true}
    enableBorderGlow={true}
    enableTilt={true}
    enableMagnetism={true}
    clickEffect={true}
  />
</div>`;

export const circularGalleryCode = `import CircularGallery from './CircularGallery';

<div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <CircularGallery
    bend={3}
    textColor="#ffffff"
    borderRadius={0.05}
  />
</div>`;

export const imageTrailCode = `import ImageTrail from './ImageTrail';

<div style={{ height: '500px', width: '100%', position: 'relative', overflow: 'hidden' }}>
  <ImageTrail
    items={[
      "https://images.unsplash.com/photo-1653896775515-951b43021b3b?q=80&w=600&auto=format",
      "https://images.unsplash.com/photo-1548021682-1720ed403a5b?q=80&w=600&auto=format",
      "https://images.unsplash.com/photo-1696429380069-23dcf7a6e12e?q=80&w=600&auto=format",
      "https://images.unsplash.com/photo-1655635643532-fa9ba2648cbe?q=80&w=600&auto=format",
      "https://images.unsplash.com/photo-1655635643420-b9646b617bbd?q=80&w=600&auto=format",
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=600&auto=format"
    ]}
    variant={1}
  />
</div>`;

export const stackCode = `import Stack from './Stack';

<div style={{ position: 'relative', width: '300px', height: '400px' }}>
  <Stack
    randomRotation={true}
    sensitivity={180}
    sendToBackOnClick={false}
    cards={[
      <div style={{ width: '100%', height: '100%', borderRadius: '12px', background: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Card 1</div>,
      <div style={{ width: '100%', height: '100%', borderRadius: '12px', background: '#d0d0d0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Card 2</div>,
      <div style={{ width: '100%', height: '100%', borderRadius: '12px', background: '#b0b0b0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Card 3</div>,
      <div style={{ width: '100%', height: '100%', borderRadius: '12px', background: '#909090', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Card 4</div>
    ]}
  />
</div>`;

export const fluidGlassCode = `import FluidGlass from './FluidGlass';

<div style={{ height: '600px', width: '100%', position: 'relative' }}>
  <FluidGlass mode="lens" />
</div>`;

export const masonryCode = `import Masonry from './Masonry';

<div style={{ width: '100%', minHeight: '600px' }}>
  <Masonry
    items={[
      { id: '1', img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?q=80&w=500&auto=format', url: '#', height: 400 },
      { id: '2', img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?q=80&w=500&auto=format', url: '#', height: 300 },
      { id: '3', img: 'https://images.unsplash.com/photo-1519681393784-d8e5b5a45771?q=80&w=500&auto=format', url: '#', height: 500 },
      { id: '4', img: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=500&auto=format', url: '#', height: 350 },
      { id: '5', img: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=500&auto=format', url: '#', height: 450 },
    ]}
    stagger={0.05}
    duration={0.5}
  />
</div>`;

export const modelViewerCode = `import ModelViewer from './ModelViewer';

<div style={{ width: '100%', height: '500px', position: 'relative' }}>
  <ModelViewer
    url="https://modelviewer.dev/shared-assets/models/Astronaut.glb"
    environmentPreset="sunset"
    autoRotate={true}
  />
</div>`;

export const lanyardCode = `import Lanyard from './Lanyard';

<div style={{ height: '500px', width: '100%', position: 'relative', overflow: 'hidden' }}>
  <Lanyard
    position={[0, 0, 20]}
    gravity={[0, -40, 0]}
    fov={20}
    bandColor="#fff"
    cardColor="#efefef"
  />
</div>`;
