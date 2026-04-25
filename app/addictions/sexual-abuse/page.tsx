import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { Shield, AlertCircle, Heart, Activity, PhoneCall, Globe } from "lucide-react";
import { AnimatedNumber } from "@/components/AnimatedNumber";

export default function SexualAbusePage() {
  return (
    <main className="min-h-screen selection:bg-emerald-100 selection:text-emerald-900 bg-white">
      <Navbar />

      <section className="relative pt-40 pb-20 overflow-hidden bg-zinc-900 border-b border-zinc-800">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-600 opacity-20 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-emerald-900/50 text-emerald-400 font-semibold text-sm mb-6 border border-emerald-800">
            <Shield className="w-4 h-4" />
            Trauma Recovery & Support
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 mx-auto leading-tight">
            Breaking the Silence.<br/> Reclaiming Your <span className="text-emerald-400 drop-shadow-sm">Life.</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            Sexual assault is a profound violation that leaves invisible wounds. Whether it happened recently or years ago, your story matters, and your healing is possible.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">A Shared Burden</h2>
              <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                It is a common misconception that sexual assault only affects one gender. The reality is that <strong className="text-zinc-900">both men and women</strong> are survivors of this trauma. Society often places a heavier burden of silence on men, making it even harder for them to come forward and seek help.
              </p>
              <div className="bg-zinc-50 border border-zinc-100 p-6 rounded-2xl mb-6">
                <div className="flex items-start gap-4">
                  <Heart className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <p className="text-zinc-700 italic">"Healing begins the moment you realize that what happened to you does not define you. Your strength is in your survival."</p>
                </div>
              </div>
              <p className="text-lg text-zinc-600 leading-relaxed mb-8">
                Cleanse provides a strictly confidential environment where you can process your journey with therapists who specialize in trauma-informed care, ensuring you are supported at every step.
              </p>
              <Link href="/auth" className="inline-block bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg active:scale-95">
                Connect with a Specialist
              </Link>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
               <div className="bg-zinc-900 text-white p-8 rounded-3xl border border-zinc-800 relative overflow-hidden">
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                       <PhoneCall className="w-6 h-6 text-emerald-400" />
                       Emergency Helplines
                    </h3>
                    <div className="space-y-4">
                      {[
                        { name: "WARIF Hotline", phone: "+234 809 210 0009" },
                        { name: "Mirabel Centre", phone: "+234 818 781 7817" },
                        { name: "Stand to End Rape (STER)", phone: "+234 809 596 7000" },
                        { name: "DSVA Lagos (Toll Free)", phone: "08000 333 333" }
                      ].map((item, i) => (
                        <div key={i} className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/10">
                          <span className="font-semibold text-zinc-300">{item.name}</span>
                          <span className="text-emerald-400 font-bold">{item.phone}</span>
                        </div>
                      ))}
                    </div>
                  </div>
               </div>

               <div className="bg-emerald-50 p-8 rounded-3xl border border-emerald-100">
                  <h3 className="text-xl font-bold text-zinc-900 mb-4 flex items-center gap-2">
                    <Globe className="w-6 h-6 text-emerald-600" />
                    Specialized Organizations
                  </h3>
                  <div className="space-y-4">
                    <p className="text-zinc-600 text-sm">
                      <strong className="text-zinc-900 block">Hands Off Initiative:</strong> Focused on support for both male and female survivors, providing specialized trauma counseling.
                    </p>
                    <p className="text-zinc-600 text-sm">
                      <strong className="text-zinc-900 block">Project Alert:</strong> Dedicated to providing information and practical support for survivors of gender-based violence.
                    </p>
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
