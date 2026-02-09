export const code = `import { AnimatePresence, motion } from "framer-motion";
import * as React from "react";
import { cn } from "@/lib/utils";

export interface GitHubStarButtonProps {
  owner: string;
  repo: string;
  stars?: number;
  className?: string;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  angle: number;
  scale: number;
}

const StarIcon = ({
  className,
  filled,
}: {
  className?: string;
  filled?: boolean;
}) => (
  <svg
    viewBox="0 0 16 16"
    className={className}
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth={filled ? 0 : 1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M8 1.5l1.85 4.1 4.65.55-3.5 3.15.95 4.6L8 11.7l-4 2.2.95-4.6-3.5-3.15 4.65-.55L8 1.5z" />
  </svg>
);

const GitHubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 16 16" className={className} fill="currentColor">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
  </svg>
);

function formatNumber(num: number): string {
  if (num >= 1000000)
    return \`\${(num / 1000000).toFixed(1).replace(/\.0\$/, "")}M\`;
  if (num >= 1000) return \`\${(num / 1000).toFixed(1).replace(/\.0\$/, "")}k\`;
  return num.toLocaleString();
}

const AnimatedDigit = ({ digit }: { digit: string }) => {
  const isNumber = /\d/.test(digit);
  if (!isNumber) return <span className="inline-block px-0.5">{digit}</span>;
  const num = parseInt(digit, 10);
  return (
    <span className="relative inline-block h-[1em] w-[0.6em] overflow-hidden">
      <motion.span
        className="absolute top-0 left-0 flex w-full flex-col items-center"
        animate={{ y: \`\${-num * 10}%\` }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
          <span
            key={n}
            className="flex h-[1em] items-center justify-center leading-none"
          >
            {n}
          </span>
        ))}
      </motion.span>
    </span>
  );
};

function RollingNumber({ value }: { value: number }) {
  const digits = formatNumber(value).split("");
  return (
    <div className="flex items-center">
      {digits.map((digit, i) => (
        <AnimatedDigit key={\`\${i}-\${digit}\`} digit={digit} />
      ))}
    </div>
  );
}

function StarParticles({ particles }: { particles: Particle[] }) {
  return (
    <AnimatePresence>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="pointer-events-none absolute"
          initial={{ opacity: 1, scale: p.scale, x: 0, y: 0 }}
          animate={{
            opacity: 0,
            scale: 0,
            x: Math.cos(p.angle) * 60,
            y: Math.sin(p.angle) * 60,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ left: p.x, top: p.y }}
        >
          <StarIcon className="h-3 w-3 text-yellow-500" filled />
        </motion.div>
      ))}
    </AnimatePresence>
  );
}

export default function GitHubStarButton({
  owner,
  repo,
  stars: manualStars,
  className,
}: GitHubStarButtonProps) {
  const [localStars, setLocalStars] = React.useState(manualStars ?? 0);
  const [isHovered, setIsHovered] = React.useState(false);
  const [isStarred, setIsStarred] = React.useState(false);
  const [particles, setParticles] = React.useState<Particle[]>([]);

  React.useEffect(() => {
    if (manualStars === undefined) {
      fetch(\`https://api.github.com/repos/\${owner}/\${repo}\`)
        .then((res) => res.json())
        .then((data) => {
          if (data?.stargazers_count !== undefined)
            setLocalStars(data.stargazers_count);
        })
        .catch(console.error);
    }
  }, [owner, repo, manualStars]);

  const handleClick = (e: React.MouseEvent) => {
    if (!isStarred) {
      e.preventDefault();
      setIsStarred(true);
      setLocalStars((prev) => prev + 1);
      const newParticles = Array.from({ length: 12 }, (_, i) => ({
        id: Date.now() + i,
        x: 20,
        y: 10,
        angle: (Math.PI * 2 * i) / 12,
        scale: 0.5 + Math.random() * 0.5,
      }));
      setParticles(newParticles);
      setTimeout(() => {
        window.open(\`https://github.com/\${owner}/\${repo}\`, "_blank");
        setParticles([]);
      }, 600);
    }
  };

  return (
    <motion.a
      href={\`https://github.com/\${owner}/\${repo}\`}
      target="_blank"
      className={cn(
        "relative inline-flex items-center gap-3 rounded-xl px-4 py-2 border border-border bg-card shadow-sm hover:shadow-md transition-shadow",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <GitHubIcon className="h-5 w-5" />
      <div className="h-4 w-px bg-border" />
      <div className="relative flex items-center gap-2 min-w-[50px]">
        <StarParticles particles={particles} />
        <StarIcon
          className={cn(
            "h-5 w-5 transition-colors duration-300",
            isHovered || isStarred
              ? "text-yellow-500"
              : "text-muted-foreground",
          )}
          filled={isHovered || isStarred}
        />
        <div className="font-mono text-sm font-bold tracking-tight">
          <RollingNumber value={localStars} />
        </div>
      </div>
    </motion.a>
  );
}
`;
