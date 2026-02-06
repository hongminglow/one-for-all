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
