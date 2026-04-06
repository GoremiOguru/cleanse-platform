import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { BookOpen, BrainCircuit, HeartHandshake, Lightbulb, ShieldAlert, Sparkles, Scale, AlertTriangle, Users } from "lucide-react";
import { AnimatedQuestions } from "@/components/AnimatedQuestions";

export default function EducationPage() {
  return (
    <main className="min-h-screen selection:bg-emerald-100 selection:text-emerald-900 bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-zinc-50 border-b border-zinc-100">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 rounded-full w-[600px] h-[400px] bg-emerald-500 opacity-10 blur-[120px] pointer-events-none"></div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-emerald-100/50 text-emerald-800 font-semibold text-sm mb-6 border border-emerald-200">
            <BookOpen className="w-4 h-4" />
            Learning & Resources
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-zinc-900 mb-6 mx-auto leading-tight">
            Knowledge is the First Step to <span className="text-emerald-600 drop-shadow-sm">Recovery.</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Man has a threefold nature. Hence, every fold requires attention and understanding due to its complexity. We believe in equipping users and pastors with the psychological truth and clinical understanding behind addiction, mental health, and the intersection of faith.
          </p>
        </div>
      </section>

      <AnimatedQuestions />

      {/* For Users: Understanding Addiction */}
      <section className="py-24 bg-white relative border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/3">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <BrainCircuit className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-zinc-900 mb-4">The Science of Struggle</h2>
              <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                Addiction is not a simple "lack of discipline." Uncover the clinical realities of how habits hijack the brain perfectly designed by God.
              </p>
            </div>
            
            <div className="lg:w-2/3 grid gap-8">
              <div className="bg-zinc-50 border border-zinc-100 p-8 rounded-3xl hover:border-emerald-200 hover:shadow-md transition-all group">
                <h3 className="text-2xl font-bold text-zinc-900 mb-4 flex items-center gap-4">
                  <div className="p-2 bg-emerald-100/50 rounded-xl group-hover:bg-emerald-100 transition-colors">
                    <Lightbulb className="w-6 h-6 text-emerald-600" />
                  </div>
                  The Dopamine Trap
                </h3>
                <p className="text-zinc-600 text-lg leading-relaxed">
                  Pornography, drugs, and even seemingly harmless habits like excessive scrolling cause artificial dopamine surges in the brain. Over time, the brain builds an immunity (tolerance), requiring more of the substance or behavior just to feel "normal." It is a physiological rewiring, not just a moral failing.
                </p>
              </div>

              <div className="bg-zinc-50 border border-zinc-100 p-8 rounded-3xl hover:border-emerald-200 hover:shadow-md transition-all group">
                <h3 className="text-2xl font-bold text-zinc-900 mb-4 flex items-center gap-4">
                  <div className="p-2 bg-emerald-100/50 rounded-xl group-hover:bg-emerald-100 transition-colors">
                    <ShieldAlert className="w-6 h-6 text-emerald-600" />
                  </div>
                  Trauma and "Numbing"
                </h3>
                <p className="text-zinc-600 text-lg leading-relaxed">
                  Addiction is almost never the primary problem; it is mostly a misguided attempt to solve a problem. It acts as an anesthetic to pain, anxiety, or deep-seated trauma safely tucked away. True healing requires addressing the wound, not just treating the band-aid.
                </p>
              </div>

              <div className="bg-emerald-900 border border-emerald-800 p-8 rounded-3xl text-emerald-50 shadow-xl relative overflow-hidden group hover:bg-emerald-950 transition-colors">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500 opacity-20 rounded-full blur-3xl pointer-events-none group-hover:opacity-30 transition-opacity"></div>
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-4 relative z-10">
                  <div className="p-2 bg-emerald-800/80 rounded-xl">
                    <Sparkles className="w-6 h-6 text-emerald-400" />
                  </div>
                  Neuroplasticity: The Hope for Change
                </h3>
                <p className="text-emerald-100/90 text-lg leading-relaxed relative z-10">
                  Just as the brain can be fundamentally rewired by addiction, it can be entirely healed and restored through sustained abstinence, clinical therapy, and spiritual guidance. This biological capability to rebuild pathways perfectly embodies the phrase "renewing of your mind" (Romans 12:2).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Pastors: Theology & Mental Health */}
      <section className="py-24 bg-zinc-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-start">
            <div className="lg:w-1/3">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <Scale className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-zinc-900 mb-4">For Pastors & Leaders</h2>
              <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                Learn to definitively separate clinical illness from spiritual warfare, ensuring you shepherd your flock with both truth and clinical grace.
              </p>
            </div>
            
            <div className="lg:w-2/3 grid gap-8">
              <div className="bg-white border border-zinc-200 p-8 rounded-3xl hover:border-emerald-200 hover:shadow-md transition-all group">
                <h3 className="text-2xl font-bold text-zinc-900 mb-4 flex items-center gap-4">
                  <div className="p-2 bg-emerald-100/50 rounded-xl group-hover:bg-emerald-100 transition-colors">
                    <AlertTriangle className="w-6 h-6 text-emerald-600" />
                  </div>
                  The Spiritualization Trap
                </h3>
                <p className="text-zinc-600 text-lg leading-relaxed">
                  In deeply religious contexts, there is a dangerous tendency to misdiagnose clinical depression, severe anxiety, or biological substance dependency as purely "spiritual attacks." Dismissing a neurochemical imbalance as a lack of faith is akin to telling a congregant to "pray away" a broken leg. Medicine and therapy are profound instruments of God's grace and not a sign of weakness.
                </p>
              </div>

              <div className="bg-white border border-zinc-200 p-8 rounded-3xl hover:border-emerald-200 hover:shadow-md transition-all group">
                <h3 className="text-2xl font-bold text-zinc-900 mb-4 flex items-center gap-4">
                  <div className="p-2 bg-emerald-100/50 rounded-xl group-hover:bg-emerald-100 transition-colors">
                    <Users className="w-6 h-6 text-emerald-600" />
                  </div>
                  Creating a Culture of Transparency
                </h3>
                <p className="text-zinc-600 text-lg leading-relaxed">
                  Hiding and sin is both cause and effect. You create avenues to hide which then leads to sin and because you sin, you hide. Shame grows entirely in the dark. If a pastor never models vulnerability, the congregation interprets perfection as the baseline for acceptance. High-trust environments are built when leaders are safely authentic about past struggles, thus giving permission to the congregation to remove their own masks.
                </p>
              </div>

              <div className="bg-white border border-zinc-200 p-8 rounded-3xl hover:border-emerald-200 hover:shadow-md transition-all group">
                <h3 className="text-2xl font-bold text-zinc-900 mb-4 flex items-center gap-4">
                  <div className="p-2 bg-emerald-100/50 rounded-xl group-hover:bg-emerald-100 transition-colors">
                    <HeartHandshake className="w-6 h-6 text-emerald-600" />
                  </div>
                  Knowing When to Refer
                </h3>
                <p className="text-zinc-600 text-lg leading-relaxed">
                  Your anointing is to shepherd, not automatically to provide clinical psychoanalysis. Learning the boundary between a "spiritual crisis" and a "mental health emergency" is critical. Partnering with licensed Christian psychologists bridges the gap, allowing you to provide spiritual care while professionals handle the psychological load. Which once again, is not a sign of weakness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-900 py-24 text-center relative overflow-hidden text-emerald-50">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500 opacity-20 blur-[100px] pointer-events-none rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-zinc-900 opacity-30 blur-[100px] pointer-events-none rounded-full"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Equipped for Empathy.</h2>
          <p className="text-xl text-emerald-200/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you are struggling silently or trying to help a loved one, take the first step towards an educated, shame-free recovery.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/auth" className="inline-flex items-center justify-center bg-white hover:bg-zinc-100 text-emerald-900 font-bold px-10 py-4 rounded-full transition-all shadow-xl active:scale-95">
              Get Personal Support
            </Link>
            <Link href="/private-help" className="inline-flex items-center justify-center bg-emerald-800 hover:bg-emerald-700 border border-emerald-700 text-white font-bold px-10 py-4 rounded-full transition-all shadow-lg active:scale-95">
              Find Private Help
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
