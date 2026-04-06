import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { Pill, ShieldCheck, HeartPulse, Stethoscope } from "lucide-react";
import { AnimatedNumber } from "@/components/AnimatedNumber";

export default function DrugAbusePage() {
  return (
    <main className="min-h-screen selection:bg-emerald-100 selection:text-emerald-900 bg-white">
      <Navbar />

      <section className="relative pt-40 pb-20 overflow-hidden bg-zinc-900 border-b border-zinc-800 flex flex-col justify-center">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-emerald-600 opacity-15 blur-[150px] rounded-full pointer-events-none"></div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-emerald-900/50 text-emerald-400 font-semibold text-sm mb-6 border border-emerald-800">
            <Pill className="w-4 h-4" />
            Drug & Prescription Abuse
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 mx-auto leading-tight">
            Safe Detox. <br/> <span className="text-emerald-400">Total Restoration.</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            From the misuse of clinical prescriptions to hard narcotics, substance recovery is a medical journey requiring heavily structured supervision and deeply empathetic care.
          </p>
        </div>
      </section>

      <section className="py-24 bg-zinc-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">Navigating the Darkest Valley</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Trying to "cold-turkey" severe drug dependency alone can be biologically dangerous and incredibly isolating. Cleanse provides secure routing to specialized inpatient and outpatient care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm hover:border-emerald-300 transition-all group">
               <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                 <Stethoscope className="w-7 h-7" />
               </div>
               <h3 className="text-xl font-bold text-zinc-900 mb-3">Clinical Detox</h3>
               <p className="text-zinc-600 text-sm leading-relaxed">
                 Medical supervision isn't a luxury; it's a physiological safety net. Our network includes sanitized, secure environments to weather severe withdrawal symptoms safely.
               </p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm hover:border-emerald-300 transition-all group">
               <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                 <HeartPulse className="w-7 h-7" />
               </div>
               <h3 className="text-xl font-bold text-zinc-900 mb-3">Trauma Counseling</h3>
               <p className="text-zinc-600 text-sm leading-relaxed">
                 Drugs are powerfully effective pain management tools until they destroy the user. True rehabilitation hunts down the core wound requiring the anesthesia in the first place.
               </p>
            </div>

            <div className="bg-emerald-900 p-8 rounded-3xl border border-emerald-800 shadow-xl text-emerald-50 group">
               <div className="w-14 h-14 bg-emerald-800 text-emerald-300 rounded-xl flex items-center justify-center mb-6">
                 <ShieldCheck className="w-7 h-7" />
               </div>
               <h3 className="text-xl font-bold text-white mb-3">Anonymity Guaranteed</h3>
               <p className="text-emerald-100/80 text-sm leading-relaxed mb-6">
                 We understand the enormous professional risk of seeking help for illicit substances. We route you exclusively to centers bound by extreme privacy nondisclosure doctrines.
               </p>
               <Link href="/private-help" className="block text-center w-full bg-white text-emerald-900 font-bold py-2 rounded-lg text-sm hover:bg-emerald-50 transition-colors">
                 Find a Center
               </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
