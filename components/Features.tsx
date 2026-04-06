"use client";

import { motion } from "framer-motion";
import { Activity, Users, ShieldCheck } from "lucide-react";

const features = [
  {
    name: "Track Your Healing",
    description: "Visualize your progress with daily check-ins and milestone celebrations to keep you motivated.",
    icon: Activity,
  },
  {
    name: "A Community That Cares",
    description: "Connect anonymously with others on the same journey. Share stories, struggles, and victories.",
    icon: Users,
  },
  {
    name: "Safe and Private",
    description: "Your data is yours. We prioritize your privacy so you can focus entirely on your recovery.",
    icon: ShieldCheck,
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-2">How it works</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Everything you need to stay on track</h3>
          <p className="text-lg text-zinc-600">Recovery is a journey, not a destination. Cleanse provides the tools to help you navigate every step.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100 hover:shadow-md hover:border-emerald-100 hover:ring-1 hover:ring-emerald-100 transition-all"
            >
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-emerald-600" />
              </div>
              <h4 className="text-xl font-bold text-zinc-900 mb-3">{feature.name}</h4>
              <p className="text-zinc-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
