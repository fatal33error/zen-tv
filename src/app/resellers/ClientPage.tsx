"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Users, Server, ShieldCheck, CreditCard } from "lucide-react";
import Link from 'next/link';

export default function ResellersPage() {
  const benefits = [
    { icon: Server, title: "White-Label Dashboard", desc: "Get full access to a robust, unbranded control panel to manage your entire customer base easily." },
    { icon: Users, title: "Manage Customers", desc: "Create, edit, pause, or delete subscriptions instantly. You are in total control of your business." },
    { icon: CreditCard, title: "High Profit Margins", desc: "Buy credits at wholesale prices and set your own retail prices to maximize your revenue." },
    { icon: ShieldCheck, title: "Priority Support", desc: "Dedicated VIP support for all our resellers to ensure your business never faces downtime." },
  ];

  const packages = [
    { name: "Starter", credits: "100 Credits", price: "$150", cost: "$1.50 per credit" },
    { name: "Professional", credits: "500 Credits", price: "$600", cost: "$1.20 per credit", highlight: true },
    { name: "Enterprise", credits: "1000 Credits", price: "$1000", cost: "$1.00 per credit" },
  ];

  return (
    <div className="pt-32 pb-24 relative min-h-screen">
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-brand-purple/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-cyan/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="text-4xl md:text-6xl font-heading font-extrabold tracking-tight mb-6 text-white">
             Start Your Own <span className="bg-clip-text text-transparent bg-brand-gradient">Business.</span>
          </motion.h1>
          <motion.p initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.1}} className="text-xl text-zinc-400 font-body">
             Join the zen+ TV Reseller Program. Get access to a powerful control panel, manage your customers, and set your own prices.
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {benefits.map((b, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-zinc-900/50 p-8 rounded-3xl border border-white/10 backdrop-blur-sm"
            >
               <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10">
                  <b.icon className="w-6 h-6 text-brand-cyan" />
               </div>
               <h3 className="text-xl font-heading font-bold text-white mb-3">{b.title}</h3>
               <p className="text-zinc-400 text-sm leading-relaxed font-body">{b.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mb-12">
           <h2 className="text-3xl font-heading font-bold text-white">Reseller <span className="text-brand-purple">Credit Packages</span></h2>
        </div>

        {/* Pricing Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className={`relative rounded-3xl p-8 border flex flex-col ${
                pkg.highlight
                  ? "bg-zinc-950 border-brand-purple/50 shadow-[0_0_40px_rgba(79,172,254,0.15)] transform lg:-translate-y-4 lg:scale-105 z-10"
                  : "bg-zinc-900/50 border-white/10 backdrop-blur-sm"
              }`}
            >
              {pkg.highlight && (
                 <div className="absolute top-0 inset-x-0 h-1 bg-brand-gradient rounded-t-3xl" />
              )}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-heading font-bold text-white mb-2">{pkg.name}</h3>
                <div className="text-brand-cyan font-semibold mb-6">{pkg.credits}</div>
                <div className="text-5xl font-bold text-white mb-2">{pkg.price}</div>
                <div className="text-zinc-500 text-sm font-medium">{pkg.cost}</div>
              </div>
              
              <div className="space-y-4 mb-8 flex-1">
                 <div className="flex items-center gap-3 text-sm text-zinc-300">
                    <Check className="w-4 h-4 text-brand-cyan flex-shrink-0" /> Full Dashboard Access
                 </div>
                 <div className="flex items-center gap-3 text-sm text-zinc-300">
                    <Check className="w-4 h-4 text-brand-cyan flex-shrink-0" /> Unlimited Trial Generation
                 </div>
                 <div className="flex items-center gap-3 text-sm text-zinc-300">
                    <Check className="w-4 h-4 text-brand-cyan flex-shrink-0" /> 24/7 VIP Support
                 </div>
              </div>

              <Link href="/contact" className={`w-full py-4 text-center rounded-xl font-bold transition-all ${
                  pkg.highlight
                    ? "bg-brand-gradient text-zinc-950 hover:scale-105 shadow-[0_0_20px_rgba(0,242,254,0.3)]"
                    : "bg-white/5 border border-white/20 text-white hover:bg-white/10"
                }`}
              >
                Become a Reseller
              </Link>
            </motion.div>
          ))}
        </div>
        
      </div>
    </div>
  );
}
