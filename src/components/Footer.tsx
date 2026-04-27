"use client";

import React from 'react';
import { ArrowRight, Shield, CreditCard } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-1 cursor-pointer select-none">
              <span className="text-2xl font-heading font-extrabold text-white tracking-tight">zen</span>
              <span className="text-2xl font-heading font-extrabold bg-clip-text text-transparent bg-brand-gradient">+ TV</span>
            </Link>
            <p className="text-zinc-400 text-sm font-body">The ultimate viewing experience. Stop buffering, start watching.</p>
            <div className="flex relative mt-2">
              <input type="email" placeholder="Subscribe to newsletter" className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-4 text-sm text-white focus:outline-none focus:border-brand-cyan transition-colors" />
              <button className="absolute right-1 top-1 bottom-1 w-10 flex items-center justify-center rounded-full bg-brand-gradient text-zinc-950 hover:scale-105 transition-transform">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Links Columns */}
          {[
            { title: 'Company', links: [{name: 'About Us', path: '/'}, {name: 'Pricing', path: '/pricing'}, {name: 'Channels', path: '/channels'}, {name: 'Contact', path: '/contact'}] },
            { title: 'Support', links: [{name: 'Setup Tutorials', path: '/tutorials'}, {name: 'FAQ', path: '/'}, {name: 'Resellers', path: '/resellers'}, {name: 'Free Trial', path: '/free-trial'}] },
          ].map(col => (
            <div key={col.title}>
              <h4 className="text-white font-bold mb-6">{col.title}</h4>
              <ul className="space-y-4">
                {col.links.map(link => (
                  <li key={link.name}>
                    <Link href={link.path} className="text-zinc-400 text-sm hover:text-white hover:translate-x-1 inline-block transition-all duration-300 font-body">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4">
              {['Terms of Service', 'Privacy Policy', 'DMCA', 'Refund Policy'].map(link => (
                <li key={link}>
                  <Link href="#" className="text-zinc-400 text-sm hover:text-white hover:translate-x-1 inline-block transition-all duration-300 font-body">{link}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-zinc-500 text-sm">© {new Date().getFullYear()} zen+ TV. All rights reserved.</p>
          <div className="flex items-center gap-4 text-zinc-600">
             {/* Payment Gateway Icons (Abstracted) */}
             <CreditCard className="w-8 h-8" />
             <Shield className="w-8 h-8" />
             <div className="text-xs font-bold border border-zinc-600 rounded px-2 py-1">CRYPTO</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
