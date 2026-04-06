import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { UserRound, Target, ShieldCheck, HeartPulse } from "lucide-react";
import { FeedbackForm } from "@/components/FeedbackForm";

export default function AboutPage() {
  return (
    <main className="min-h-screen selection:bg-emerald-100 selection:text-emerald-900 bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-zinc-50 border-b border-zinc-100">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 rounded-full w-[600px] h-[400px] bg-emerald-500 opacity-10 blur-[120px] pointer-events-none"></div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-emerald-100/50 text-emerald-800 font-semibold text-sm mb-6 border border-emerald-200">
            <Target className="w-4 h-4" />
            Our Mission & Story
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-zinc-900 mb-6 mx-auto leading-tight">
            Living above <span className="text-emerald-600 drop-shadow-sm">Stigma.</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Cleanse was built to bridge the painful gap between severe internal struggles and the fear of public exposure, especially for Christians and Societal figures.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Image Side */}
            <div className="lg:w-1/2 w-full">
              <div className="relative w-full aspect-[4/5] max-w-md mx-auto group">
                {/* Backdrop blob */}
                <div className="absolute inset-0 bg-emerald-500 rounded-3xl transform translate-x-4 translate-y-4 opacity-20 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500"></div>
                {/* Image Container */}
                <div className="relative w-full h-full rounded-3xl overflow-hidden border border-zinc-200 shadow-xl bg-zinc-100 flex items-center justify-center">
                  <Image 
                    src="/founder-image.webp" 
                    alt="Founder of Cleanse"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700" 
                    sizes="(max-w-768px) 100vw, 50vw"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-zinc-100 flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                    <UserRound className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">The Visionary</p>
                    <p className="text-zinc-900 font-bold">Founder, Cleanse</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Side */}
            <div className="lg:w-1/2">
              <span className="text-emerald-600 font-bold tracking-wide uppercase text-sm mb-3 block">From the Founder - Remi</span>
              <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6 leading-tight">
                "We cannot heal and live above what we are forced to hide."
              </h2>
              <div className="space-y-6 text-lg text-zinc-600 leading-relaxed">
                <p>
                  Hi, my name is Goremi Oguru. The church and society have long treated addiction and severe mental health burdens as either a lack of faith or a moral failure. Because of this, thousands of public figures, pastors, and every-day faithful people suffer completely in the dark.
                </p>
                <p>
                  I created <strong className="text-emerald-700 font-semibold">Cleanse</strong> because I realized there were not enough existing systems that protected the dignity of the struggler. The burden of expectation from society and friends made vulnerability a luxury many couldn't afford. The fear of gossip was stronger than the desire for help and structured therapy. 
                </p>
                <p>
                  Our goal is simple: To provide an absolutely confidential, highly clinical, and spiritually grounded platform where healing can begin without the pervasive fear of judgment. You are seen, you are safe, and your recovery is our sole mission.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-zinc-50 border-t border-zinc-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">Our Core Pillars</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Everything we build and every resource we provide stands on these three foundational promises.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all text-center group">
              <div className="w-16 h-16 mx-auto bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">Absolute Privacy</h3>
              <p className="text-zinc-600 leading-relaxed">
                Your identity is sealed. Our tools are designed so that neither your congregation, your employers, nor the public will ever know of your internal battles unless you choose to share.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm hover:shadow-md hover:emerald-200 transition-all text-center group">
              <div className="w-16 h-16 mx-auto bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <HeartPulse className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">Clinical Empathy</h3>
              <p className="text-zinc-600 leading-relaxed">
                We bridge the gap by bringing in licensed trauma counselors and psychoanalysts who understand addiction neurobiology, ensuring your care is scientifically sound as well as spiritual.
              </p>
            </div>

            <div className="bg-emerald-900 p-8 rounded-3xl border border-emerald-800 shadow-xl text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-emerald-500 opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <div className="w-16 h-16 mx-auto bg-emerald-800 text-emerald-300 rounded-2xl flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Restorative Grace</h3>
              <p className="text-emerald-100/90 leading-relaxed relative z-10">
                True grace doesn't ignore the problem; it provides the tools to defeat it. We are committed to not just pausing bad habits, but fully restoring your mind, faith, and vocation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-zinc-900 py-20 text-center relative overflow-hidden border-t border-emerald-900/30">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Join the Movement.</h2>
          <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Healing yourself empowers you to heal others. Create an account today to access specialized recovery networks securely.
          </p>
          <Link href="/auth" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-zinc-900 font-bold px-10 py-4 rounded-full transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] active:scale-95">
            Begin Your Journey
          </Link>
        </div>
      </section>

      {/* Suggestion / Feedback Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Help Us Improve</h2>
          <p className="text-lg text-zinc-600 mb-10">
            Cleanse is built for the community. If you have any suggestions on how we can improve our platform, better protect your privacy, or add more resources, please let us know.
          </p>
          
          <FeedbackForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
