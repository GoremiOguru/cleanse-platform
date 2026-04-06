"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Background glowing blob */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] opacity-15 pointer-events-none">
        <div className="absolute inset-0 bg-emerald-400 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block py-1.5 px-4 rounded-full bg-emerald-50 text-emerald-600 font-semibold text-sm mb-6 border border-emerald-100"
          >
            A Safe Path to Recovery
          </motion.span>
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-zinc-900 mb-8 leading-tight">
            Break free. <br />
            <span className="text-emerald-600 drop-shadow-sm">Reclaim your life.</span>
          </h1>
          <p className="text-xl text-zinc-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            Cleanse is a private, supportive platform designed to help you overcome addiction, track your progress, and connect with people who understand your journey.
          </p>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/auth" className="group flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white w-full sm:w-auto px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 active:translate-y-0">
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#features" className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-zinc-600 hover:text-zinc-900 bg-white border border-zinc-200 hover:border-zinc-300 transition-colors">
              How it works
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
