"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Users, Server, ShieldCheck, CreditCard } from "lucide-react";
import Link from 'next/link';

export default function ResellersPage() {
  const benefits = [
    { icon: Server, title: "White-Label Authority", desc: "Command your brand with a robust, unbranded control panel. Your customers, your rules." },
    { icon: Users, title: "Total Client Control", desc: "Instant provisioning. Create, edit, or pause subscriptions with a single click. Zero friction." },
    { icon: CreditCard, title: "Elite Profitability", desc: "Secure credits at wholesale rates and define your own margins. Scale your revenue exponentially." },
    { icon: ShieldCheck, title: "24/7 VIP Backchannel", desc: "Direct access to our senior engineering team. Your business uptime is our absolute priority." },
  ];

  const packages = [
    { 
      name: "Vanguard Starter", 
      credits: "100 Global Credits", 
      price: "$150", 
      cost: "$1.50 per credit",
      description: "Ideal for establishing your first high-revenue IPTV footprint."
    },
    { 
      name: "Apex Professional", 
      credits: "500 Global Credits", 
      price: "$600", 
      cost: "$1.20 per credit", 
      highlight: true,
      badge: "MOST POPULAR FOR SCALING",
      description: "Engineered for rapid growth and maximum market penetration."
    },
    { 
      name: "Titan Enterprise", 
      credits: "1000 Global Credits", 
      price: "$1000", 
      cost: "$1.00 per credit",
      description: "Dominance at scale. The ultimate wholesale rate for industry leaders."
    },
  ];

  return (
    <div className="pt-32 pb-24 relative min-h-screen bg-zinc-950 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/3 right-0 w-[800px] h-[800px] bg-brand-purple/5 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-brand-cyan/5 rounded-full blur-[200px] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-purple/20 bg-brand-purple/5 text-brand-purple text-xs font-bold tracking-widest uppercase mb-8"
          >
            <Users size={14} className="fill-brand-purple" />
            Reseller Partnership
          </motion.div>
          <motion.h1 
            initial={{opacity:0, y:20}} 
            animate={{opacity:1, y:0}} 
            className="text-4xl md:text-7xl font-heading font-extrabold tracking-tight mb-8 text-white leading-tight"
          >
             Build Your Own <span className="bg-clip-text text-transparent bg-brand-gradient">Streaming Empire.</span>
          </motion.h1>
          <motion.p 
            initial={{opacity:0, y:20}} 
            animate={{opacity:1, y:0}} 
            transition={{delay:0.1}} 
            className="text-xl text-zinc-400 font-body leading-relaxed max-w-3xl mx-auto"
          >
             Deploy the world&apos;s most reliable IPTV infrastructure under your own brand. 
             We provide the technology; you capture the market.
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {benefits.map((b, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group bg-zinc-900/40 p-10 rounded-[2rem] border border-white/5 backdrop-blur-xl hover:border-brand-cyan/20 hover:bg-zinc-900/60 transition-all duration-500"
            >
               <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 transition-transform duration-500 group-hover:border-brand-cyan/30">
                  <b.icon className="w-7 h-7 text-brand-cyan" />
               </div>
               <h3 className="text-xl font-heading font-bold text-white mb-4">{b.title}</h3>
               <p className="text-zinc-400 text-sm leading-relaxed font-body group-hover:text-zinc-300 transition-colors">{b.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mb-16">
           <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white">Select Your <span className="text-brand-purple">Reserve Package</span></h2>
        </div>

        {/* Pricing Grid */}
        <div className="grid lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.6, ease: [0.21, 0.45, 0.32, 0.9] }}
              className={`group relative rounded-[2.5rem] p-10 border transition-all duration-500 flex flex-col ${
                pkg.highlight
                  ? "bg-zinc-900/80 border-brand-purple/30 shadow-[0_0_80px_rgba(79,172,254,0.15)] transform lg:-translate-y-4 lg:scale-[1.05] z-10"
                  : "bg-zinc-900/40 border-white/5 backdrop-blur-xl hover:border-white/20 hover:bg-zinc-900/60"
              }`}
            >
              {pkg.highlight && (
                <div className="absolute -top-5 inset-x-0 flex justify-center">
                  <div className="bg-gradient-to-r from-brand-purple to-brand-cyan text-zinc-950 text-[10px] font-black px-6 py-2 rounded-full whitespace-nowrap shadow-[0_4px_30px_rgba(79,172,254,0.5)] tracking-[0.2em] animate-pulse-glow">
                    {pkg.badge}
                  </div>
                </div>
              )}

              <div className="text-center mb-10">
                <h3 className={`text-2xl font-heading font-bold mb-4 ${pkg.highlight ? 'text-brand-purple' : 'text-white'}`}>{pkg.name}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-8 px-4">
                  {pkg.description}
                </p>
                <div className="flex items-center justify-center gap-2 mb-4 bg-white/5 py-2 px-4 rounded-xl inline-flex mx-auto border border-white/5">
                   <div className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
                   <span className="text-brand-cyan font-black text-xs uppercase tracking-widest">{pkg.credits}</span>
                </div>
                <div className="text-6xl font-black text-white mb-3 tracking-tighter">{pkg.price}</div>
                <div className="text-zinc-500 text-xs font-bold uppercase tracking-widest">{pkg.cost}</div>
              </div>
              
              <div className="space-y-5 mb-10 flex-1 border-t border-white/5 pt-8">
                 {[
                   "Full white-label dashboard",
                   "Unlimited trial generation",
                   "Real-time customer analytics",
                   "24/7 dedicated VIP support"
                 ].map((feature, idx) => (
                   <div key={idx} className="flex items-center gap-4 text-sm text-zinc-300 group/item">
                      <div className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 bg-white/5 border border-white/10 group-hover/item:border-brand-purple/50 transition-colors duration-300`}>
                        <Check className="w-3.5 h-3.5 text-brand-purple" />
                      </div>
                      <span className="group-hover/item:text-white transition-colors duration-300 font-medium">{feature}</span>
                   </div>
                 ))}
              </div>

              <Link href="/contact" className={`group/btn relative w-full py-5 text-center rounded-2xl font-black transition-all duration-300 overflow-hidden text-xs tracking-[0.15em] uppercase ${
                  pkg.highlight
                    ? "bg-brand-gradient text-zinc-950 shadow-[0_0_30px_rgba(0,242,254,0.4)]"
                    : "bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20"
                }`}
              >
                <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent)] -translate-x-full group-hover/btn:animate-shine" />
                <span className="relative z-10">Start Your Empire</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
