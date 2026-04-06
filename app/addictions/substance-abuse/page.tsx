import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { Wine, HeartHandshake, Home } from "lucide-react";
import { AnimatedNumber } from "@/components/AnimatedNumber";

export default function SubstanceAbusePage() {
  return (
    <main className="min-h-screen selection:bg-emerald-100 selection:text-emerald-900 bg-white">
      <Navbar />

      <section className="relative pt-40 pb-20 overflow-hidden bg-zinc-900 border-b border-zinc-800">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-600 opacity-20 blur-[150px] rounded-full pointer-events-none"></div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-emerald-900/50 text-emerald-400 font-semibold text-sm mb-6 border border-emerald-800">
            <Wine className="w-4 h-4" />
            Alcohol & Substance Use
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 mx-auto leading-tight">
            Sober Living. <br/><span className="text-emerald-400">Restored Families.</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            Alcoholism is a slow-burning disease that fundamentally alters liver function, neurological stability, and familial joy. We help you map out the absolute safest road to lifelong sobriety.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="lg:w-1/2 text-left">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">The Danger of the "Functional" Alcoholic</h2>
              <div className="space-y-6 text-lg text-zinc-600 leading-relaxed">
                <p>
                  Because alcohol is socially acceptable, it is incredibly easy for its abuse to hide in plain sight. Many leaders and professionals label themselves as "functional", masking extreme toxic liver abuse and slowly degrading emotional capacity.
                </p>
                <p>
                  Prolonged heavy drinking drastically impacts the central nervous system. Immediate cessation without medical assistance can cause 'Delirium Tremens', a rapid onset of severe confusion, cardiovascular collapse, and seizures.
                </p>
                <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-2xl flex items-start gap-4">
                  <Home className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <p className="text-emerald-900 text-sm">
                    <strong>It affects the whole house:</strong> Addiction does not just cripple the individual. Spouses and children absorb the emotional shrapnel. Our holistic programs offer concurrent family guidance therapy to rebuild broken homes.
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <Link href="/auth" className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg active:scale-95">
                  Begin Confidential Checkup
                </Link>
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="bg-zinc-50 border border-zinc-200 rounded-[2rem] p-8 lg:p-12 shadow-sm relative">
                <HeartHandshake className="w-16 h-16 text-zinc-300 absolute top-8 right-8" />
                <h3 className="text-2xl font-bold text-zinc-900 mb-6">Signs You May Need Support</h3>
                <ul className="space-y-4">
                  {[
                    "You consistently drink more or longer than you initially intended.",
                    "You have tried to cut down multiple times but completely failed.",
                    "Drinking interferes with family duties, ministry, or professional work.",
                    "You've built up such a heavy tolerance you need significantly more alcohol to feel any effect.",
                    "You experience sweating, nausea, or shakiness (tremors) when the effects wear off."
                  ].map((sign, i) => (
                    <li key={i} className="flex items-start gap-3 text-zinc-700">
                      <span className="flex-shrink-0 w-6 h-6 bg-zinc-200 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">{i+1}</span>
                      <span>{sign}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
