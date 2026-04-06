import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { EyeOff, AlertCircle, Brain, Activity } from "lucide-react";
import { AnimatedNumber } from "@/components/AnimatedNumber";

export default function PornographyPage() {
  return (
    <main className="min-h-screen selection:bg-emerald-100 selection:text-emerald-900 bg-white">
      <Navbar />

      <section className="relative pt-40 pb-20 overflow-hidden bg-zinc-900 border-b border-zinc-800">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-600 opacity-20 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-emerald-900/50 text-emerald-400 font-semibold text-sm mb-6 border border-emerald-800">
            <EyeOff className="w-4 h-4" />
            Pornography & Digital Intimacy
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 mx-auto leading-tight">
            Breaking the Silence.<br/> Rewiring the <span className="text-emerald-400 drop-shadow-sm">Mind.</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            The most common, yet most deeply hidden epidemic in the modern church and professional society. It thrives in secrecy, but it unravels entirely in the light of clinical and spiritual intervention.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">The Neurological Impact</h2>
              <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                Like any powerful chemical substance, hyper-stimulating digital imagery causes severe spikes in dopamine. Over time, the DeltaFosB protein accumulates in the brain, creating a literal structural change that demands heavier stimulation just to achieve baseline normalcy.
              </p>
              <div className="bg-zinc-50 border border-zinc-100 p-6 rounded-2xl mb-6">
                <div className="flex items-start gap-4">
                  <Brain className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <p className="text-zinc-700"><strong>Hypofrontality:</strong> Prolonged exposure functionally shrinks the prefrontal cortex—the part of the brain responsible for willpower, decision making, and impulse control.</p>
                </div>
              </div>
              <p className="text-lg text-zinc-600 leading-relaxed mb-8">
                But through sustained abstinence and targeted cognitive therapies, the brain relies on its immense neuroplasticity to literally heal and rebuild itself. Healing is biologically promised.
              </p>
              <Link href="/auth" className="inline-block bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg active:scale-95">
                Start Confidential Therapy
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-zinc-900 text-white p-8 rounded-3xl border border-zinc-800 flex flex-col justify-center">
                <div className="text-5xl font-black text-emerald-400 mb-2 font-mono"><AnimatedNumber value={64} />%</div>
                <h3 className="text-lg font-bold mb-2">Of Christian Men</h3>
                <p className="text-zinc-400 text-sm">view pornography at least once a month, according to major Barna studies, proving this struggle is vastly widespread.</p>
              </div>
              <div className="bg-emerald-50 text-emerald-900 p-8 rounded-3xl border border-emerald-100 flex flex-col justify-center">
                <div className="text-5xl font-black text-emerald-600 mb-2 font-mono"><AnimatedNumber value={15} />%</div>
                <h3 className="text-lg font-bold mb-2">Of Christian Women</h3>
                <p className="text-emerald-700/80 text-sm">struggle regularly, yet rarely have specialized spaces where they feel safe disclosing it without facing heavier societal stigma.</p>
              </div>
              <div className="sm:col-span-2 bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm flex items-start gap-4">
                <AlertCircle className="w-8 h-8 text-rose-500 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-2">The Isolation Loop</h3>
                  <p className="text-zinc-600">Because it is viewed as a "moral catastrophe", leaders facing this issue isolate to protect their calling. This exact isolation is the soil where the addiction multiplies the fastest.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
