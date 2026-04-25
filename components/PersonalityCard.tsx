"use client";

import { motion } from "framer-motion";
import { Zap, Users, Anchor, ShieldCheck, Sparkles } from "lucide-react";

type PersonalityCardProps = {
  type: string;
  label: string;
  traits: string;
  description: string;
};

export default function PersonalityCard({ type, label, traits, description }: PersonalityCardProps) {
  const getIcon = () => {
    switch (type) {
      case "ARCHITECT": return <Zap className="w-8 h-8" />;
      case "CATALYST": return <Users className="w-8 h-8" />;
      case "ANCHOR": return <Anchor className="w-8 h-8" />;
      case "GUARDIAN": return <ShieldCheck className="w-8 h-8" />;
      default: return <Sparkles className="w-8 h-8" />;
    }
  };

  const getColorClass = () => {
    switch (type) {
      case "ARCHITECT": return "from-amber-400 to-orange-600 shadow-orange-500/20";
      case "CATALYST": return "from-emerald-400 to-teal-600 shadow-emerald-500/20";
      case "ANCHOR": return "from-blue-400 to-indigo-600 shadow-blue-500/20";
      case "GUARDIAN": return "from-purple-400 to-fuchsia-600 shadow-purple-500/20";
      default: return "from-zinc-400 to-zinc-600 shadow-zinc-500/20";
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-[2rem] border border-zinc-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
    >
      <div className={`h-24 bg-gradient-to-r ${getColorClass()} relative`}>
        <div className="absolute -bottom-6 left-8 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center text-zinc-900 border border-zinc-50">
          {getIcon()}
        </div>
      </div>
      
      <div className="pt-10 pb-8 px-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-2 py-1 rounded-md mb-2 inline-block">
              Your Archetype
            </span>
            <h3 className="text-2xl font-bold text-zinc-900 leading-tight">
              {label}
            </h3>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {traits.split(",").map((trait, i) => (
            <span key={i} className="text-xs font-semibold px-3 py-1 bg-zinc-100 text-zinc-600 rounded-full border border-zinc-200">
              {trait.trim()}
            </span>
          ))}
        </div>

        <p className="text-zinc-500 leading-relaxed mb-6">
          {description}
        </p>

        <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
          <h4 className="text-sm font-bold text-zinc-800 mb-2 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-500" />
            Why this matters for your recovery
          </h4>
          <p className="text-xs text-zinc-500 leading-relaxed italic">
            Understanding your {type.toLowerCase()} nature allows us to serve you content that resonates with your core values and behavioral patterns, making your journey 40% more effective.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
