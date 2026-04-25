import { EyeOff, Wind, Pill, Wine, Shield } from "lucide-react";
import Link from "next/link";

const addictions = [
  {
    title: "Pornography",
    description: "Break the silent cycle of behavioral addiction with therapies that guarantee your privacy and restore psychological wellbeing.",
    icon: EyeOff,
    href: "/addictions/pornography"
  },
  {
    title: "Smoking",
    description: "Regain complete control over your health through clinical habit-reversal techniques and physiological support.",
    icon: Wind,
    href: "/addictions/smoking"
  },
  {
    title: "Drug Abuse",
    description: "Discreet pathways designed to help you safely detox and rehabilitate from prescription medications or hard substances.",
    icon: Pill,
    href: "/addictions/drug-abuse"
  },
  {
    title: "Substance Abuse",
    description: "Tailored private assessments and recovery programs specifically crafted to combat strong alcohol and substance dependencies.",
    icon: Wine,
    href: "/addictions/substance-abuse"
  },
  {
    title: "Sexual Abuse",
    description: "Confidential recovery and support for survivors of sexual assault and trauma. You are not alone on your path to healing.",
    icon: Shield,
    href: "/addictions/sexual-abuse"
  }
];

export function AddictionsSection() {
  return (
    <section className="py-24 bg-zinc-900 relative border-t border-emerald-900/50">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Comprehensive Care for <br className="hidden md:block"/>
            <span className="text-emerald-400">Every Struggle.</span>
          </h2>
          <p className="text-lg text-zinc-400 leading-relaxed">
            Addiction takes many forms, and no two battles are exactly the same. We provide highly discreet, specialized pathways addressing varying dependencies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {addictions.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link 
                href={item.href} 
                key={index} 
                className="bg-zinc-800/50 border border-zinc-700/50 rounded-2xl p-8 hover:bg-zinc-800 hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-900/20 transition-all group block cursor-pointer"
              >
                <div className="w-12 h-12 bg-zinc-900 border border-zinc-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/10 group-hover:text-emerald-400 transition-colors text-zinc-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                  {item.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
