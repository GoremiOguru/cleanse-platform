import Link from "next/link";

export function CTA() {
  return (
    <section className="bg-emerald-600 py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white opacity-5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Ready to take the first step?
        </h2>
        <p className="text-xl text-emerald-50 mb-10 leading-relaxed max-w-2xl mx-auto">
          Join a supportive network of people who understand what you are going through. Your new life starts with a single click.
        </p>
        <Link href="/auth" className="inline-block bg-white text-emerald-700 hover:text-emerald-800 hover:bg-zinc-50 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl shadow-emerald-900/20 hover:-translate-y-0.5 active:translate-y-0">
          Get Started Today
        </Link>
      </div>
    </section>
  );
}
