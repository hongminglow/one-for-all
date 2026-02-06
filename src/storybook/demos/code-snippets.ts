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
  text="React Bits is a library of animated and interactive React components."
  highlightWords={["React", "Bits", "animated", "components"]}
  highlightClass="highlighted"
  trigger="hover"
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
