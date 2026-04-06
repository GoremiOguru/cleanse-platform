import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { HeartPulse, CheckCircle2, ShieldCheck, Flower, Brain, Wine, EyeOff, Pill } from "lucide-react";
import { AnimatedNumber } from "@/components/AnimatedNumber";

export default function WomenPage() {
  return (
    <main className="min-h-screen selection:bg-emerald-100 selection:text-emerald-900 bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-zinc-50 border-b border-zinc-100">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-emerald-500 opacity-20 blur-[100px]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-emerald-100/50 text-emerald-800 font-semibold text-sm mb-6 border border-emerald-200">
            <Flower className="w-4 h-4" />
            Designed Exclusively for Women
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-zinc-900 mb-6 max-w-4xl mx-auto">
            A Safe Space for Healing Without <span className="text-emerald-600 drop-shadow-sm">Judgment.</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you are navigating mental health struggles, substance abuse, or secret battles. Finding your way out starts with a safe place to speak.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/auth" className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 active:scale-95">
              Start Your Private Journey
            </Link>
            <Link href="#areas" className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-lg text-zinc-700 bg-white border border-zinc-200 hover:bg-zinc-50 hover:border-emerald-200 hover:text-emerald-700 transition-colors">
              Explore Resources
            </Link>
          </div>
        </div>
      </section>

      {/* Areas of Support Section */}
      <section id="areas" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6">You Are Not Alone</h2>
            <p className="text-lg text-zinc-600 max-w-3xl mx-auto">
              Women face unique pressures and stigmas around addiction and mental health. Cleanse provides tailored, absolutely confidential support systems specifically addressing key areas of struggle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-zinc-50 border border-zinc-100 rounded-3xl p-8 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-100/50 transition-all group">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Brain className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">Mental Health</h3>
              <p className="text-zinc-600 leading-relaxed mb-6">
                Anxiety, severe depression, and emotional burnout often stay hidden behind a smile. We connect you with verified therapists who understand the pressure of maintaining a strong exterior while crumbling inside.
              </p>
            </div>

            <div className="bg-zinc-50 border border-zinc-100 rounded-3xl p-8 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-100/50 transition-all group">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Wine className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">Alcohol Abuse</h3>
              <p className="text-zinc-600 leading-relaxed mb-6">
                When the "wine down" routine spirals out of control, the accompanying shame can prevent women from speaking up. We provide completely private assessments and recovery pathways tailored for alcohol dependency.
              </p>
            </div>

            <div className="bg-zinc-50 border border-zinc-100 rounded-3xl p-8 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-100/50 transition-all group">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Pill className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">Drugs & Substances</h3>
              <p className="text-zinc-600 leading-relaxed mb-6">
                From prescription medications overused for coping, to stronger substance struggles. Get highly discreet, medical help to safely detox and rehabilitate without public exposure.
              </p>
            </div>

            <div className="bg-zinc-50 border border-zinc-100 rounded-3xl p-8 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-100/50 transition-all group">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <EyeOff className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">Pornography & Intimacy</h3>
              <p className="text-zinc-600 leading-relaxed mb-6">
                An unspoken struggle amongst many women. Break free from the internal shame cycle of pornography or behavioral addictions with counseling designed specifically for women's neurobiology and emotional context.
              </p>
            </div>

            <div className="bg-zinc-50 border border-zinc-100 rounded-3xl p-8 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-100/50 transition-all group">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <HeartPulse className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">Smoking & Habits</h3>
              <p className="text-zinc-600 leading-relaxed mb-6">
                Whether it's nicotine, vaping, or complex self-harm habits. We connect you with habit-reversal therapies and physiological help to regain complete control over your body and mind.
              </p>
            </div>

            <div className="bg-emerald-900 border border-emerald-800 rounded-3xl p-8 shadow-lg relative overflow-hidden group">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-emerald-500 opacity-20 blur-3xl pointer-events-none rounded-full"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-emerald-800 text-emerald-300 rounded-2xl flex items-center justify-center mb-6">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Total Confidentiality</h3>
                <p className="text-emerald-100/80 leading-relaxed mb-8">
                  Your safety is our doctrine. Everything you do on this platform is completely sealed, guaranteeing zero exposure to employers, families, or communities.
                </p>
                <Link href="/auth" className="inline-block bg-white text-emerald-900 font-bold px-6 py-3 rounded-full hover:bg-emerald-50 transition w-full text-center">
                  Get Help Now
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-zinc-900 text-white relative border-y border-emerald-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-zinc-800">
            <div className="pt-8 md:pt-0 pb-8 md:pb-0 px-4">
              <div className="text-4xl md:text-6xl font-black text-emerald-400 mb-2 font-mono flex justify-center items-center">
                <AnimatedNumber value={60} />%
              </div>
              <h3 className="text-xl font-semibold mb-2">Suffer in Silence</h3>
              <p className="text-zinc-400">of women dealing with addiction never seek help due to societal stigma and fear of judgment.</p>
            </div>
            <div className="pt-8 md:pt-0 pb-8 md:pb-0 px-4">
              <div className="text-4xl md:text-6xl font-black text-emerald-400 mb-2 font-mono flex justify-center items-center">
                <AnimatedNumber value={100} />%
              </div>
              <h3 className="text-xl font-semibold mb-2">Confidential</h3>
              <p className="text-zinc-400">Our promise to you. Your data, identity, and struggles remain entirely private and secure.</p>
            </div>
            <div className="pt-8 md:pt-0 pb-8 md:pb-0 px-4">
              <div className="text-4xl md:text-6xl font-black text-emerald-400 mb-2 font-mono flex justify-center items-center">
                <AnimatedNumber value={24} />/<AnimatedNumber value={7} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Available Support</h3>
              <p className="text-zinc-400">Access private coaching, specialized organizations, and directories directly from your phone anytime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Content Section */}
      <section className="py-24 bg-zinc-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-emerald-600 font-bold tracking-wide uppercase text-sm mb-3 block">Why Cleanse for Women?</span>
              <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6 leading-tight">
                Breaking the stigma surrounding women's struggles.
              </h2>
              <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
                We recognize that the journey to recovery for women is uniquely layered. Whether it involves balancing motherhood, career pressures, or societal expectations, the fear of judgment often outweighs the desire to seek help. Cleanse is built specifically to bridge that gap.
              </p>
              
              <ul className="space-y-6">
                {[
                  "Specialized therapists focusing on female psychology and addiction.",
                  "Zero public footprints. No waiting rooms, no paper trails.",
                  "Support groups entirely comprising women who truly understand.",
                  "Holistic approach targeting the root cause: depression, trauma, or burnout."
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span className="text-zinc-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-500 rounded-[3rem] transform translate-x-4 translate-y-4 opacity-20"></div>
              <div className="relative bg-white p-12 lg:p-16 rounded-[3rem] shadow-xl border border-zinc-100 text-center">
                 <Flower className="w-16 h-16 text-emerald-500 mx-auto mb-6" />
                 <h3 className="text-2xl font-bold text-zinc-900 mb-4">Are you ready to take the first step?</h3>
                 <p className="text-zinc-600 mb-8 leading-relaxed">
                   Taking the first step is the hardest part. You don't have to carry this alone anymore. Create a completely anonymous account to access our curated network of care.
                 </p>
                 <Link href="/auth" className="inline-block bg-zinc-900 hover:bg-zinc-800 text-white font-bold py-4 px-10 rounded-full w-full transition-colors shadow-md">
                   Create Anonymous Account
                 </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
