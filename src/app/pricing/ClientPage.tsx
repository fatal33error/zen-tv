"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function PricingPage() {
  const plans = [
    {
      name: "Standard Access",
      price: "$9.99",
      period: "monthly",
      description: "Perfect for a solo weekend of cinematic entertainment.",
      features: ["20,000+ Live Channels", "99.9% Uptime Guarantee", "Ultra-HD & 4K Quality", "Standard Customer Support"],
      buttonText: "Begin Your Journey",
      highlight: false,
    },
    {
      name: "Premium Quarterly",
      price: "$24.99",
      period: "3 months",
      description: "Our most popular choice for consistent high-def streaming.",
      features: ["All Standard Features", "Advanced Anti-Freeze v2.0", "Full VOD Library Access", "Multi-Device Compatibility"],
      buttonText: "Unlock Premium",
      highlight: false,
    },
    {
      name: "Elite Semi-Annual",
      price: "$44.99",
      period: "6 months",
      description: "Serious entertainment for serious viewers. Maximum value.",
      features: ["All Premium Features", "Priority Server Routing", "Exclusive PPV Events", "25% Loyalty Discount"],
      buttonText: "Go Elite Now",
      highlight: false,
    },
    {
      name: "Ultimate Yearly",
      price: "$79.99",
      period: "annually",
      description: "The complete zen+ experience. Zero limits, pure luxury.",
      subtitle: "Just $6.66 per month — our best deal.",
      badge: "ULTIMATE VALUE • SAVE 40%",
      features: ["All Elite Features", "2 Simultaneous Streams", "VIP Concierge Support", "Early Access to Features"],
      buttonText: "Claim Ultimate Access",
      highlight: true,
    },
  ];

  return (
    <div className="pt-32 pb-24 relative min-h-screen bg-zinc-950 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-[800px] h-[800px] bg-brand-cyan/5 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[800px] h-[800px] bg-brand-purple/5 rounded-full blur-[200px] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{opacity:0, y:20}} 
            animate={{opacity:1, y:0}}
            className="text-4xl md:text-7xl font-heading font-extrabold tracking-tight mb-8 text-white leading-tight"
          >
             Choose Your <span className="bg-clip-text text-transparent bg-brand-gradient">Master Pass.</span>
          </motion.h1>
          <motion.p 
            initial={{opacity:0, y:20}} 
            animate={{opacity:1, y:0}} 
            transition={{delay:0.1}} 
            className="text-xl text-zinc-400 font-body leading-relaxed max-w-2xl mx-auto"
          >
             Simple, transparent pricing for the world&apos;s most advanced streaming platform. 
             No hidden fees. Cancel anytime.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.21, 0.45, 0.32, 0.9] }}
              className={`group relative rounded-[2.5rem] p-10 border transition-all duration-500 flex flex-col h-full ${
                plan.highlight
                  ? "bg-zinc-900/80 backdrop-blur-3xl border-brand-cyan/30 shadow-[0_0_80px_rgba(0,242,254,0.15)] lg:scale-[1.05] z-20"
                  : "bg-zinc-900/40 backdrop-blur-xl border-white/5 hover:border-white/20 hover:bg-zinc-900/60 hover:shadow-2xl z-10"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-5 inset-x-0 flex justify-center">
                  <div className="bg-gradient-to-r from-brand-cyan to-brand-purple text-zinc-950 text-[10px] font-black px-6 py-2 rounded-full whitespace-nowrap shadow-[0_4px_30px_rgba(0,242,254,0.5)] tracking-[0.2em] animate-pulse-glow">
                    {plan.badge}
                  </div>
                </div>
              )}

              <div className="mb-8">
                <h3 className={`text-xl font-heading font-bold mb-3 tracking-tight ${plan.highlight ? 'text-brand-cyan' : 'text-zinc-100'}`}>
                  {plan.name}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed min-h-[40px]">
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-extrabold text-white tracking-tighter">{plan.price}</span>
                  <span className="text-zinc-500 text-sm font-semibold">/{plan.period}</span>
                </div>
                {plan.subtitle && (
                  <div className="mt-3 py-1.5 px-3 rounded-lg bg-green-500/10 text-[#4ade80] text-xs font-bold inline-block">
                    {plan.subtitle}
                  </div>
                )}
              </div>

              <div className="space-y-5 mb-10 flex-1">
                {plan.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm group/item">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover/item:scale-110 ${
                      plan.highlight ? 'bg-brand-cyan/20' : 'bg-white/5'
                    }`}>
                      <Check className={`w-3 h-3 ${plan.highlight ? 'text-brand-cyan' : 'text-green-500'}`} />
                    </div>
                    <span className={`font-medium transition-colors duration-300 ${
                      plan.highlight ? 'text-white' : 'text-zinc-400 group-hover/item:text-white'
                    }`}>
                      {feat}
                    </span>
                  </div>
                ))}
              </div>

              <button
                className={`group/btn relative w-full py-5 rounded-2xl font-black transition-all duration-300 overflow-hidden text-xs tracking-[0.15em] uppercase ${
                  plan.highlight
                    ? "bg-brand-gradient text-zinc-950 shadow-[0_0_30px_rgba(0,242,254,0.4)]"
                    : "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20"
                }`}
              >
                <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent)] -translate-x-full group-hover/btn:animate-shine" />
                <span className="relative z-10">{plan.buttonText}</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
