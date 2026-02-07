"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });

  const y = useTransform(scrollYProgress, [0, 1], [0, -400]);

  return (
    <div
      ref={ref}
      className="h-[120vh] w-full bg-[var(--sb-bg)] py-20 overflow-hidden relative"
    >
      <motion.div style={{ y }} className="flex flex-row flex-wrap gap-4 px-4">
        {products.map((product) => (
          <div
            key={product.title}
            className="group relative h-60 w-80 rounded-xl bg-center bg-cover border-[var(--sb-border)] hover:scale-105 transition-transform"
            style={{ backgroundImage: `url(${product.thumbnail})` }}
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity">
              <span>{product.title}</span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
