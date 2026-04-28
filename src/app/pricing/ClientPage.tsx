"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function PricingPage() {
  const plans = [
    {
      name: "1-Month Pass",
      price: "$9.99",
      period: "mo",
      features: ["Full Channel Access", "Complete VOD Library", "Standard Support"],
      buttonText: "Select 1-Month",
      highlight: false,
    },
    {
      name: "3-Month Pass",
      price: "$24.99",
      period: "3mo",
      features: ["Full Channel Access", "Complete VOD Library", "Standard Support"],
      buttonText: "Select 3-Month",
      highlight: false,
    },
    {
      name: "6-Month Pass",
      price: "$44.99",
      period: "6mo",
      features: ["Full Channel Access", "Complete VOD Library", "Standard Support", "25% Savings"],
      buttonText: "Get Started",
      highlight: false,
    },
    {
      name: "12-Month Pass",
      price: "$79.99",
      period: "yr",
      subtitle: "Just $6.66 per month",
      badge: "Best Value - Save 40%",
      features: ["Full Channel Access", "Complete VOD Library", "Priority 24/7 Support", "2 Simultaneous Devices"],
      buttonText: "Get 12-Month Pass",
      highlight: true,
    },
  ];

  return (
    <div className="pt-32 pb-24 relative min-h-screen bg-zinc-950">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-cyan/10 rounded-full blur-[200px] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="text-4xl md:text-6xl font-heading font-extrabold tracking-tight mb-6 text-white">
             Choose Your <span className="bg-clip-text text-transparent bg-brand-gradient">zen+ TV Pass</span>
          </motion.h1>
          <motion.p initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.1}} className="text-xl text-zinc-400 font-body mb-2">
             Simple, transparent pricing. No hidden fees. Cancel anytime.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 items-end">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-3xl p-8 border flex flex-col min-h-[480px] ${
                plan.highlight
                  ? "bg-zinc-900/80 backdrop-blur-2xl border-transparent shadow-[0_0_50px_rgba(0,242,254,0.15)] transform lg:-translate-y-4 lg:scale-[1.03] z-10"
                  : "bg-zinc-900/40 backdrop-blur-xl border-white/10 transition-all hover:-translate-y-2 hover:bg-zinc-900/60 hover:shadow-xl mt-4 lg:mt-0"
              }`}
            >
              {plan.highlight && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-b from-brand-cyan to-green-500 rounded-3xl -z-10 p-[2px]">
                    <div className="absolute inset-0 bg-zinc-900 rounded-[calc(1.5rem-2px)] -z-10" />
                  </div>
                  <div className="absolute -top-4 inset-x-0 flex justify-center">
                    <motion.div 
                      animate={{ y: [0, -4, 0] }} 
                      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                      className="bg-gradient-to-r from-brand-cyan to-green-400 text-zinc-950 text-xs font-bold px-5 py-1.5 rounded-full whitespace-nowrap shadow-[0_4px_20px_rgba(0,242,254,0.4)]"
                    >
                      {plan.badge}
                    </motion.div>
                  </div>
                </>
              )}
              <div className="mb-4">
                <h3 className={`text-2xl font-heading font-bold mb-2 ${plan.highlight ? 'text-brand-cyan' : 'text-zinc-100'}`}>{plan.name}</h3>
              </div>
              <div className={`mb-${plan.subtitle ? '2' : '8'}`}>
                <span className="text-5xl font-bold text-white">{plan.price}</span>
                <span className="text-zinc-400 text-sm font-medium">/{plan.period}</span>
              </div>
              {plan.subtitle && (
                <div className="mb-6 text-[#4ade80] text-sm font-bold">
                  {plan.subtitle}
                </div>
              )}
              <ul className="space-y-4 mb-8 flex-1 mt-4">
                {plan.features.map((feat, idx) => (
                  <li key={idx} className={`flex items-center gap-3 text-sm font-medium ${plan.highlight ? 'text-white' : 'text-zinc-300'}`}>
                    {plan.highlight ? (
                      <div className="w-2.5 h-2.5 rounded-full bg-brand-cyan flex-shrink-0 shadow-[0_0_10px_rgba(0,242,254,0.5)]" />
                    ) : (
                      <Check className="w-4 h-4 flex-shrink-0 text-green-500" />
                    )}
                    {feat}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-4 rounded-full font-bold transition-all mt-auto text-sm ${
                  plan.highlight
                    ? "bg-gradient-to-r from-brand-cyan to-green-400 text-zinc-950 hover:scale-105 shadow-[0_0_25px_rgba(0,242,254,0.4)]"
                    : "bg-white/10 text-white hover:bg-white/20 hover:scale-[1.02]"
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
