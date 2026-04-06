"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const questions = [
  "Is it Spiritual?",
  "Is it just a neurological disorder?"
];

export function AnimatedQuestions() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % questions.length);
    }, 4000); // Changes every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-zinc-900 border-y border-emerald-900/50 relative overflow-hidden flex flex-col items-center justify-center min-h-[300px]">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      
      {/* Glowing Blob behind the text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-[600px] h-[150px] bg-emerald-500 opacity-20 blur-[80px] rounded-[100%] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 relative z-10 w-full">
        <div className="relative h-24 md:h-32 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.h2
              key={index}
              initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute text-4xl md:text-5xl lg:text-7xl font-black text-center text-white drop-shadow-[0_0_25px_rgba(16,185,129,0.8)] tracking-tight leading-tight w-full"
            >
              {questions[index]}
            </motion.h2>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
