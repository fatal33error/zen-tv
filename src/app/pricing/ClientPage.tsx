"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, CreditCard } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ParticlesBackground } from "@/components/ui/ParticlesBackground";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function PricingPage() {
  const plans = [
    {
      name: "1-Month Pass",
      price: "$9.99",
      period: "mo",
      features: ["Full Channel Access", "Complete VOD Library", "Standard Support"],
      buttonText: "Get started",
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
      buttonText: "Select 6-Month",
      highlight: false,
    },
    {
      name: "1-Year Pass",
      price: "$79.99",
      period: "yr",
      breakdown: "Just $6.66 per month",
      badge: "Best Value - Save 40%",
      features: ["Full Channel Access", "Complete VOD Library", "Priority 24/7 Support", "Multi-Device Access"],
      buttonText: "Get 1-Year Pass",
      highlight: true,
    },
  ];

  return (
    <div className="pt-32 pb-24 relative min-h-screen bg-zinc-950 overflow-hidden">
      <ParticlesBackground />
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <SectionHeader
          badgeIcon={<CreditCard className="w-4 h-4" />}
          badgeText="Simple Pricing"
          title="Choose Your"
          gradientTitle="Master Pass."
          description="Simple, transparent pricing for the world's most advanced streaming platform. No hidden fees. Cancel anytime."
        />

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 items-stretch">
          {plans.map((plan, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <motion.div
                className={`relative rounded-[2rem] p-10 border transition-all duration-300 flex flex-col h-full ${
                  plan.highlight
                    ? "bg-zinc-900/40 border-brand-cyan/50 shadow-[0_0_80px_rgba(0,242,254,0.15)] transform lg:-translate-y-2"
                    : "bg-zinc-900/40 border-white/5 hover:border-white/10"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-5 inset-x-0 flex justify-center">
                    <div className="bg-brand-cyan text-zinc-950 text-[11px] font-bold px-6 py-2 rounded-full shadow-[0_4px_30px_rgba(0,242,254,0.5)]">
                      {plan.badge}
                    </div>
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-heading font-bold text-zinc-100">{plan.name}</h3>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-6xl font-bold text-white tracking-tighter">{plan.price}</span>
                    <span className="text-zinc-500 text-lg font-medium">/{plan.period}</span>
                  </div>
                  {plan.breakdown && (
                    <div className="mt-2 text-green-400 text-sm font-semibold">
                      {plan.breakdown}
                    </div>
                  )}
                </div>

                <div className="space-y-5 mb-10 flex-1 mt-6">
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm text-zinc-400 font-body">
                      <Check className={`w-4 h-4 flex-shrink-0 ${plan.highlight ? 'text-brand-cyan' : 'text-green-500'}`} />
                      {feat}
                    </div>
                  ))}
                </div>

                <button
                  className={`w-full py-5 rounded-full font-heading font-bold transition-all duration-300 ${
                    plan.highlight
                      ? "bg-brand-gradient text-zinc-950 hover:shadow-[0_0_30px_rgba(0,242,254,0.4)] hover:scale-[1.02]"
                      : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                  }`}
                >
                  {plan.buttonText}
                </button>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
