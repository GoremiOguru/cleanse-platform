import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { Wind, Activity, Clock, ShieldAlert } from "lucide-react";
import { AnimatedNumber } from "@/components/AnimatedNumber";

export default function SmokingPage() {
  return (
    <main className="min-h-screen selection:bg-emerald-100 selection:text-emerald-900 bg-white">
      <Navbar />

      <section className="relative pt-40 pb-20 overflow-hidden bg-zinc-900 border-b border-zinc-800">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-600 opacity-10 blur-[150px] rounded-full pointer-events-none"></div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-emerald-900/50 text-emerald-400 font-semibold text-sm mb-6 border border-emerald-800">
            <Wind className="w-4 h-4" />
            Smoking & Nicotine Dependency
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 mx-auto leading-tight">
            Breathing Free. <span className="text-emerald-400">Reclaiming the Body.</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            More than just a bad habit, nicotine holds the body hostage. Combatting it requires behavioral therapy, immense physiological endurance, and a structured medical off-ramp.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">The Hook of Nicotine</h2>
              <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                Nicotine reaches the brain within 10 seconds of inhalation, causing an immediate flood of adrenaline and dopamine. However, the drop-off is exceptionally fierce, triggering severe anxiety, irritability, and uncontrollable cravings.
              </p>
              
              <ul className="space-y-6 mb-8">
                <li className="flex items-start gap-4 p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
                  <Activity className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <div>
                    <strong className="text-zinc-900 block mb-1">Physical Withdrawal</strong>
                    <span className="text-zinc-600 text-sm">Your body starts flushing out carbon monoxide within 12 hours. The initial detox symptoms peak around day 3, making it the most critical window to have professional coaching available.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4 p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
                  <ShieldAlert className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <div>
                    <strong className="text-zinc-900 block mb-1">Psychological Triggers</strong>
                    <span className="text-zinc-600 text-sm">Addiction to smoking is tied heavily to routine (e.g., after eating, during stressful meetings). True recovery separates the chemical dependence from the environmental ritual.</span>
                  </div>
                </li>
              </ul>

              <Link href="/auth" className="inline-block bg-zinc-900 hover:bg-zinc-800 text-white font-bold px-8 py-4 rounded-full transition-all shadow-md active:scale-95">
                Join our Cessation Program
              </Link>
            </div>

            <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4">
              <div className="col-span-2 bg-emerald-600 text-white p-8 rounded-3xl relative overflow-hidden">
                <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4">
                  <Clock className="w-48 h-48" />
                </div>
                <h3 className="text-2xl font-bold mb-4 relative z-10">The Healing Timeline</h3>
                <div className="space-y-4 relative z-10">
                  <div className="flex justify-between border-b border-emerald-500 pb-2">
                    <span className="font-semibold">20 Minutes</span>
                    <span className="text-emerald-100 text-right text-sm max-w-[150px]">Heart rate returns to normal.</span>
                  </div>
                  <div className="flex justify-between border-b border-emerald-500 pb-2">
                    <span className="font-semibold">12 Hours</span>
                    <span className="text-emerald-100 text-right text-sm max-w-[150px]">Blood CO levels normalize.</span>
                  </div>
                  <div className="flex justify-between border-b border-emerald-500 pb-2">
                    <span className="font-semibold">2-3 Weeks</span>
                    <span className="text-emerald-100 text-right text-sm max-w-[150px]">Lung function visibly improves.</span>
                  </div>
                  <div className="flex justify-between pb-2">
                    <span className="font-semibold">1 Year</span>
                    <span className="text-emerald-100 text-right text-sm max-w-[150px]">Heart disease risk cuts in half.</span>
                  </div>
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
