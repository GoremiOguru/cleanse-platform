"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useSession } from 'next-auth/react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();

  const navLinks = [
    { name: 'Ministers', href: '/ministers' },
    { name: 'Public Figures', href: '/public-figures' },
    { name: 'Women', href: '/women' },
    { name: 'Education', href: '/education' },
    { name: 'Resources', href: '/auth' }, // Kept as requested by user
    { name: 'About', href: '/about' },
    { name: 'Features', href: '/#features' },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="font-bold text-3xl text-emerald-600 tracking-tighter">
              cleanse<span className="text-emerald-300">.</span>
            </Link>
          </div>
          
          {/* Desktop/iPad Landscape Nav (1024px+) */}
          <div className="hidden lg:flex gap-4 xl:gap-8 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-zinc-600 hover:text-emerald-600 font-medium transition-colors text-sm xl:text-base whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
            {session ? (
              <Link href="/dashboard" className="bg-zinc-900 hover:bg-zinc-800 text-white px-6 py-2.5 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-zinc-200 active:scale-95 whitespace-nowrap">
                My Dashboard
              </Link>
            ) : (
              <Link href="/auth" className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2.5 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-emerald-200 active:scale-95 whitespace-nowrap">
                Get Started
              </Link>
            )}
          </div>

          {/* iPad Portrait/Mobile Menu Button (< 1024px) */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 -mr-2 text-zinc-600 hover:text-emerald-600 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* iPad/Mobile Slide-Out Nav Drawer */}
      <div 
        className={`fixed inset-x-0 bottom-0 top-20 bg-white border-t border-zinc-100 transition-all duration-300 ease-in-out transform ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        } lg:hidden overflow-y-auto pb-10 shadow-2xl`}
      >
        <div className="px-4 pt-6 pb-6 space-y-2 max-w-lg mx-auto">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              className="block px-6 py-4 rounded-2xl text-lg font-semibold text-zinc-700 hover:text-emerald-600 hover:bg-emerald-50 active:bg-emerald-100 transition-all"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="pt-6 px-4">
            {session ? (
              <Link 
                href="/dashboard" 
                className="block text-center bg-zinc-900 hover:bg-zinc-800 text-white px-6 py-4 rounded-2xl text-lg font-bold transition-all shadow-lg active:scale-95"
                onClick={() => setIsOpen(false)}
              >
                My Dashboard
              </Link>
            ) : (
              <Link 
                href="/auth" 
                className="block text-center bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-4 rounded-2xl text-lg font-bold transition-all shadow-lg active:scale-95 shadow-emerald-200"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            )}
          </div>

          {/* Additional context for tablet users to make it feel premium */}
          <div className="pt-10 text-center text-zinc-400 text-sm">
            Cleanse Platform &copy; {new Date().getFullYear()} — Recovery Simplified.
          </div>
        </div>
      </div>
    </nav>
  );
}
