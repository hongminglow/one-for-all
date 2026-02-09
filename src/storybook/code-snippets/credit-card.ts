export const code = `"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface CreditCardProps {
  number?: string;
  name?: string;
  expiry?: string;
  cvv?: string;
}

const CreditCard: React.FC<CreditCardProps> = ({
  number = "4242 4242 4242 4242",
  name = "JANE DOE",
  expiry = "12/28",
  cvv = "123",
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flex flex-col items-center gap-8 py-12">
      <div
        className="group relative h-56 w-96 cursor-pointer"
        style={{ perspective: "1000px" }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <motion.div
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{
            duration: 0.6,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          style={{ transformStyle: "preserve-3d" }}
          className="relative h-full w-full"
        >
          {/* Front */}
          <div
            className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a1c2c] to-[#4a192c] p-8 text-white shadow-2xl"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="flex items-center justify-between">
              <div className="h-10 w-14 rounded-md bg-gradient-to-br from-yellow-200 to-yellow-500 opacity-80" />
              <div className="text-xl font-bold italic tracking-tighter opacity-80">
                VISA
              </div>
            </div>
            <div>
              <div className="mb-4 text-2xl font-black tracking-widest tabular-nums drop-shadow-lg">
                {number}
              </div>
              <div className="flex items-end justify-between uppercase tracking-widest">
                <div>
                  <div className="text-[8px] font-bold opacity-50">
                    Card Holder
                  </div>
                  <div className="text-sm font-bold">{name}</div>
                </div>
                <div>
                  <div className="text-[8px] font-bold opacity-50">Expires</div>
                  <div className="text-sm font-bold">{expiry}</div>
                </div>
              </div>
            </div>
            {/* Glossy overlay */}
            <div className="absolute -inset-10 rotate-45 bg-gradient-to-t from-white/0 via-white/10 to-white/0 pointer-events-none" />
          </div>

          {/* Back */}
          <div
            className="absolute inset-0 flex flex-col justify-between rounded-2xl bg-[#0d0d0d] py-8 text-white shadow-2xl"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div className="h-12 w-full bg-[#1a1a1a]" />
            <div className="px-8 flex items-center justify-end">
              <div className="h-10 w-full max-w-[200px] bg-white text-right px-4 flex items-center justify-end">
                <span className="italic font-bold text-black tracking-widest">
                  {cvv}
                </span>
              </div>
            </div>
            <div className="px-8 text-[10px] font-medium opacity-40">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim
              ad minim veniam.
            </div>
          </div>
        </motion.div>
      </div>
      <p className="text-xs font-bold uppercase tracking-wider text-[var(--sb-text-muted)] animate-pulse">
        Click card to flip
      </p>
    </div>
  );
};

export default CreditCard;
`;
