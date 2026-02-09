"use client";

import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

export const DraggableCard = ({ children, className }: { children?: React.ReactNode; className?: string }) => {
	const x = useMotionValue(0);
	const y = useMotionValue(0);

	const rotateX = useTransform(y, [-100, 100], [30, -30]);
	const rotateY = useTransform(x, [-100, 100], [-30, 30]);

	return (
		<motion.div
			style={{
				x,
				y,
				rotateX,
				rotateY,
				z: 100,
			}}
			drag
			dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
			dragElastic={0.6}
			whileHover={{ cursor: "grab" }}
			whileTap={{ cursor: "grabbing" }}
			className={className}
		>
			{children}
		</motion.div>
	);
};
