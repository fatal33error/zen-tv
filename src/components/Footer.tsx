"use client";

import React from 'react';
import { ArrowRight, Shield, CreditCard } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0b0f19] border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-1 cursor-pointer select-none">
              <img src="/logo.svg" alt="zen+ TV" className="h-10 object-contain grayscale-[0.5] opacity-80 hover:grayscale-0 hover:opacity-100 transition-all" />
            </Link>
            <p className="text-zinc-400 text-sm font-body leading-relaxed max-w-[250px]">
              The ultimate destination for limitless, high-definition entertainment across the globe.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'Pricing', path: '/pricing' },
                { name: 'Installation Tutorials', path: '/tutorials' },
                { name: 'VOD Updates', path: '/channels' }
              ].map(link => (
                <li key={link.name}>
                  <Link href={link.path} className="text-zinc-400 text-sm hover:text-white hover:translate-x-1 inline-block transition-all duration-300 font-body">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Legal</h4>
            <ul className="space-y-4">
              {[
                { name: 'Terms of Service', path: '#' },
                { name: 'Privacy Policy', path: '#' },
                { name: 'Refund Policy', path: '#' }
              ].map(link => (
                <li key={link.name}>
                  <Link href={link.path} className="text-zinc-400 text-sm hover:text-white hover:translate-x-1 inline-block transition-all duration-300 font-body">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Secure Payments Column */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Secure Payments</h4>
            <div className="flex items-center gap-3">
              <div className="bg-white p-1.5 rounded flex items-center justify-center w-12 h-8 hover:-translate-y-1 transition-transform shadow-lg cursor-pointer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Visa_2021.svg" alt="Visa" className="h-full w-full object-contain" />
              </div>
              <div className="bg-white p-1.5 rounded flex items-center justify-center w-12 h-8 hover:-translate-y-1 transition-transform shadow-lg cursor-pointer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-full w-full object-contain" />
              </div>
              <div className="bg-white p-1.5 rounded flex items-center justify-center w-12 h-8 hover:-translate-y-1 transition-transform shadow-lg cursor-pointer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-full w-full object-contain" />
              </div>
              <div className="bg-[#f7931a] p-1.5 rounded flex items-center justify-center w-12 h-8 hover:-translate-y-1 transition-transform shadow-lg cursor-pointer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg" alt="Bitcoin" className="h-full w-full object-contain brightness-0 invert" />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex items-center justify-center">
          <p className="text-zinc-500 text-sm font-body">© 2026 zen+ TV. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
