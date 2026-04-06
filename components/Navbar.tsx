"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useSession } from 'next-auth/react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="font-bold text-3xl text-emerald-600 tracking-tighter">
              cleanse<span className="text-emerald-300">.</span>
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex gap-6 lg:gap-8 items-center">
            <Link href="/ministers" className="text-zinc-600 hover:text-emerald-600 font-medium transition-colors">Ministers</Link>
            <Link href="/public-figures" className="text-zinc-600 hover:text-emerald-600 font-medium transition-colors">Public Figures</Link>
            <Link href="/women" className="text-zinc-600 hover:text-emerald-600 font-medium transition-colors">Women</Link>
            <Link href="/education" className="text-zinc-600 hover:text-emerald-600 font-medium transition-colors">Education</Link>
            <Link href="/about" className="text-zinc-600 hover:text-emerald-600 font-medium transition-colors">About</Link>
            <Link href="/#features" className="text-zinc-600 hover:text-emerald-600 font-medium transition-colors">Features</Link>
            {session ? (
              <Link href="/dashboard" className="bg-zinc-900 hover:bg-zinc-800 text-white px-6 py-2.5 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-zinc-200 active:scale-95">
                My Dashboard
              </Link>
            ) : (
              <>
                <Link href="/auth" className="text-zinc-600 hover:text-emerald-600 font-medium transition-colors">Resources</Link>
                <Link href="/auth" className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2.5 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-emerald-200 active:scale-95">
                  Get Started
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-600 hover:text-emerald-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-zinc-100 px-4 pt-2 pb-4 space-y-1 shadow-lg flex flex-col animate-in fade-in slide-in-from-top-2 duration-200">
          <Link 
            href="/ministers" 
            className="block px-4 py-3 rounded-lg text-base font-medium text-zinc-600 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Ministers
          </Link>
          <Link 
            href="/public-figures" 
            className="block px-4 py-3 rounded-lg text-base font-medium text-zinc-600 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Public Figures
          </Link>
          <Link 
            href="/women" 
            className="block px-4 py-3 rounded-lg text-base font-medium text-zinc-600 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Women
          </Link>
          <Link 
            href="/education" 
            className="block px-4 py-3 rounded-lg text-base font-medium text-zinc-600 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Education
          </Link>
          <Link 
            href="/about" 
            className="block px-4 py-3 rounded-lg text-base font-medium text-zinc-600 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link 
            href="/#features" 
            className="block px-4 py-3 rounded-lg text-base font-medium text-zinc-600 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Features
          </Link>
          {session ? (
            <div className="pt-2 pb-1">
              <Link 
                href="/dashboard" 
                className="block text-center bg-zinc-900 hover:bg-zinc-800 text-white px-6 py-3 rounded-full font-semibold transition-all shadow-sm"
                onClick={() => setIsOpen(false)}
              >
                My Dashboard
              </Link>
            </div>
          ) : (
            <>
              <Link 
                href="/auth" 
                className="block px-4 py-3 rounded-lg text-base font-medium text-zinc-600 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Resources
              </Link>
              <div className="pt-2 pb-1">
                <Link 
                  href="/auth" 
                  className="block text-center bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold transition-all shadow-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
