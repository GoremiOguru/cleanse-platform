import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Lock, Star, Building } from "lucide-react";
import Link from "next/link";

export default function PublicFiguresPage() {
  return (
    <main className="min-h-screen bg-zinc-950 selection:bg-emerald-900 selection:text-emerald-100 pb-20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-zinc-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800 via-zinc-950 to-zinc-950"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center border-b border-zinc-800 pb-20">
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-zinc-900 text-zinc-300 font-semibold text-sm mb-6 border border-zinc-800">
            <Star className="w-4 h-4 text-emerald-500" />
            Executives, Celebrities & Politicians
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
            Recovery in absolute <span className="text-emerald-500 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]">privacy.</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            The pressure of the public eye shouldn't cost you your well-being. Discover hyper-discreet, world-class recovery programs designed exclusively for high-profile individuals.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-2 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800">
              <Lock className="w-10 h-10 text-emerald-500 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-3">Air-Tight Confidentiality</h3>
              <p className="text-zinc-400 leading-relaxed">
                Treatment centers offering completely private entrances, NDA-bound staff, and isolated villas. Focus entirely on healing without PR concerns or media leaks.
              </p>
            </div>
            
            <div className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800">
              <Building className="w-10 h-10 text-emerald-500 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-3">Executive Facilities</h3>
              <p className="text-zinc-400 leading-relaxed">
                Continue to manage your enterprise if absolutely necessary. We partner with facilities that offer private boardroom access, secure connectivity, and luxury amenities.
              </p>
            </div>
          </div>
          
          <div className="mt-16 bg-zinc-900 p-8 md:p-12 rounded-3xl border border-zinc-800 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500 opacity-[0.03] rounded-full blur-3xl pointer-events-none" />
            <h2 className="text-3xl font-bold text-white mb-4 relative z-10">Connect with a VIP Liaison</h2>
            <p className="text-zinc-400 max-w-lg mx-auto mb-8 relative z-10">
              We provide a closed-door consultation to pair you with premium rehabilitation centers internationally, or strictly vetted private facilities in Nigeria.
            </p>
            <Link href="mailto:goremioguru@gmail.com" className="relative z-10 inline-block bg-emerald-600 text-white font-bold py-4 px-10 rounded-full hover:bg-emerald-500 transition-colors shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]">
              Request Confidential Consultation
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
