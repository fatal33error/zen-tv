"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function PricingPage() {
  const plans = [
    {
      name: "The Tester",
      duration: "1-Month",
      price: "$12",
      features: ["20,000+ Live Channels", "100,000+ VODs", "HD & 4K Quality", "1 Connection", "Standard Support"],
      buttonText: "Select Plan",
      highlight: false,
    },
    {
      name: "The Fan",
      duration: "3-Month",
      price: "$29",
      features: ["All base features", "10% Savings", "Free EPG Guide", "1 Connection", "Standard Support"],
      buttonText: "Select Plan",
      highlight: false,
    },
    {
      name: "The Pro",
      duration: "6-Month",
      price: "$49",
      features: ["All previous features", "20% Savings", "Priority Support", "1 Connection", "Anti-Freeze Tech"],
      buttonText: "Select Plan",
      highlight: false,
    },
    {
      name: "The Ultimate",
      duration: "12-Month",
      price: "$79",
      badge: "Most Popular / Save 40%",
      features: ["Premium Server Priority", "Advanced Anti-Freeze Tech", "Free VPN Included", "2 Connections", "24/7 VIP Support"],
      buttonText: "Get The Ultimate",
      highlight: true,
    },
  ];

  return (
    <div className="pt-32 pb-24 relative min-h-screen">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-cyan/10 rounded-full blur-[200px] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="text-4xl md:text-6xl font-heading font-extrabold tracking-tight mb-6 text-white">
             Simple, Transparent <span className="bg-clip-text text-transparent bg-brand-gradient">Pricing.</span>
          </motion.h1>
          <motion.p initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.1}} className="text-xl text-zinc-400 font-body">
             No contracts, no hidden fees. Choose the pass that fits your entertainment lifestyle and cancel anytime.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 items-center">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-3xl p-8 border flex flex-col h-full ${
                plan.highlight
                  ? "bg-zinc-950 border-brand-cyan/50 shadow-[0_0_50px_rgba(0,242,254,0.15)] transform lg:-translate-y-4 lg:scale-105 z-10"
                  : "bg-zinc-900/50 border-white/10 backdrop-blur-sm transition-transform hover:-translate-y-2"
              }`}
            >
              {plan.highlight && (
                <>
                  <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0_340deg,#00f2fe_360deg)] animate-[spin_4s_linear_infinite] rounded-3xl -z-10 blur-sm opacity-50" />
                  <div className="absolute -top-4 inset-x-0 flex justify-center">
                    <div className="bg-brand-gradient text-zinc-950 text-xs font-bold px-4 py-1.5 rounded-full shadow-[0_4px_14px_rgba(0,242,254,0.5)] whitespace-nowrap">
                      🔥 {plan.badge}
                    </div>
                  </div>
                </>
              )}
              <div className="mb-6">
                <h3 className="text-2xl font-heading font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-zinc-400 text-sm">{plan.duration} Pass</p>
              </div>
              <div className="mb-8">
                <span className={`text-5xl font-bold ${plan.highlight ? 'text-transparent bg-clip-text bg-brand-gradient' : 'text-white'}`}>{plan.price}</span>
                <span className="text-zinc-500">/{plan.duration === '1-Month' ? 'mo' : 'total'}</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feat, idx) => (
                  <li key={idx} className={`flex items-center gap-3 text-sm font-medium ${plan.highlight ? 'text-zinc-100 font-semibold' : 'text-zinc-300'}`}>
                    <Check className={`w-4 h-4 flex-shrink-0 ${plan.highlight ? 'text-brand-cyan' : 'text-zinc-500'}`} />
                    {feat}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-4 rounded-xl font-bold transition-all mt-auto ${
                  plan.highlight
                    ? "bg-brand-gradient text-zinc-950 hover:scale-105 shadow-[0_0_20px_rgba(0,242,254,0.3)] animate-pulse"
                    : "bg-white/5 border border-white/20 text-white hover:bg-white/10"
                }`}
              >
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
