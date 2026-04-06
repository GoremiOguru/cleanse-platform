import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-zinc-950 py-12 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <Link href="/" className="font-bold text-2xl text-white tracking-tighter">
            cleanse<span className="text-emerald-500">.</span>
          </Link>
          <p className="text-zinc-500 mt-2 text-sm">
            Empowering your journey to recovery.
          </p>
        </div>
        <div className="text-zinc-500 text-sm text-center md:text-right">
          &copy; {new Date().getFullYear()} Cleanse - A sub group of Kleidon Agora Limited.All rights reserved.  <br/>
          <span className="text-zinc-700 text-xs">For informational purposes call +2348057357728. In an emergency, call 911 or your local emergency number.</span>
        </div>
      </div>
    </footer>
  );
}
