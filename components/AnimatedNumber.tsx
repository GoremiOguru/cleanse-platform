"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring, motion } from "framer-motion";

interface AnimatedNumberProps {
  value: number;
  duration?: number;
}

export function AnimatedNumber({ value }: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(Math.round(latest));
      }
    });
  }, [springValue]);

  return <motion.span ref={ref}>0</motion.span>;
}
