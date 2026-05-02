"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check, Menu, X, Globe } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [lang, setLang] = useState('EN');
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [mobileOpen]);

  const links = [
    { name: 'Pricing', path: '/pricing' },
    { name: 'Channels', path: '/channels' },
    { name: 'Resellers', path: '/resellers' },
    { name: 'Tutorials', path: '/tutorials' },
    { name: 'Contact', path: '/contact' }
  ];
  const languages = ['EN', 'FR', 'EL', 'NO', 'SV', 'DA'];

  return (
    <div className="flex justify-center w-full">
      <header className={cn(
        "fixed z-50 transition-all duration-500 left-1/2 -translate-x-1/2", 
        (scrolled && !mobileOpen)
          ? "top-4 w-[95%] lg:w-4/5 bg-zinc-900/60 backdrop-blur-2xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] rounded-full py-3" 
          : "top-0 w-full bg-transparent py-6"
      )}>
        <div className="w-full px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-1 cursor-pointer select-none">
            <img src="/logo.svg" alt="zen+ TV" className="h-8 lg:h-10 object-contain" />
          </Link>
        
        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map(link => (
            <Link key={link.name} href={link.path} className="relative group cursor-pointer text-sm font-medium text-zinc-300 hover:text-white transition-colors">
              {link.name}
              <motion.div className="absolute -bottom-1 left-0 w-full h-[2px] bg-brand-cyan origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="relative">
            <button onClick={() => setLangOpen(!langOpen)} className="flex items-center gap-1 text-sm font-medium text-zinc-300 hover:text-white transition-colors">
              <Globe className="w-4 h-4" /> {lang} <ChevronDown className="w-4 h-4" />
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} 
                  className="absolute right-0 mt-2 w-32 bg-zinc-900/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl py-2 overflow-hidden"
                >
                  {languages.map(l => (
                    <button key={l} onClick={() => {setLang(l); setLangOpen(false);}} className="w-full text-left px-4 py-2 text-sm text-zinc-300 hover:bg-white/5 hover:text-white flex justify-between items-center transition-colors">
                      {l} {lang === l && <Check className="w-4 h-4 text-brand-cyan" />}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <Link href="/free-trial" className="px-6 py-2.5 rounded-full text-sm font-bold text-zinc-950 bg-brand-gradient hover:scale-105 transition-transform shadow-[0_0_20px_rgba(0,242,254,0.3)] inline-block">
            Free Trial
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
           {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'tween', duration: 0.3 }} 
            className="fixed inset-0 z-40 bg-zinc-950 flex flex-col items-center justify-center gap-8"
          >
            {links.map(link => (
              <Link key={link.name} href={link.path} className="text-3xl font-heading font-bold text-white cursor-pointer hover:text-brand-cyan transition-colors" onClick={() => setMobileOpen(false)}>
                {link.name}
              </Link>
            ))}
            <Link href="/free-trial" className="px-8 py-4 rounded-full text-lg font-bold text-zinc-950 bg-brand-gradient mt-8" onClick={() => setMobileOpen(false)}>
              Free Trial
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
