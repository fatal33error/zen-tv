"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, Play, Monitor, Activity, Film, Smartphone, Tv, 
  ChevronDown, Zap, Lock, Star, Globe, MonitorPlay,
  PlayCircle, Mail, ShoppingCart
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --------------------------------------------------------
// 2. Hero Section
// --------------------------------------------------------
function Hero() {
  return (
    <section className="relative pb-20 lg:pb-32 overflow-hidden pt-32 lg:pt-24">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-cyan/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: The Pitch */}
          <div className="flex flex-col items-start gap-8">
            <div className="relative inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden group">
              <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.1),transparent)] -translate-x-full group-hover:animate-shine" />
              <span className="text-sm font-medium text-white">✨ Voted #1 Premium Streaming Provider 2024</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-heading font-extrabold leading-[1.1] tracking-tight text-white">
              Unlimited Entertainment.<br/>
              <span className="bg-clip-text text-transparent bg-brand-gradient">Zero Interruptions.</span><br/>
              Welcome to zenplus TV.
            </h1>

            <p className="text-lg lg:text-xl text-zinc-400 leading-relaxed max-w-xl font-body">
              Access 20,000+ live premium channels and a massive 100,000+ VOD library in crystal-clear 4K UHD. Stream global sports, blockbuster movies, and binge-worthy series on any device, anywhere.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full text-lg font-bold text-zinc-950 bg-brand-gradient shadow-[0_0_30px_rgba(0,242,254,0.3)] hover:scale-105 transition-all">
                <PlayCircle className="w-5 h-5 fill-zinc-950 text-brand-cyan group-hover:scale-110 transition-transform" />
                Start Your Free Trial
              </button>
              <button className="px-8 py-4 rounded-full text-lg font-medium text-white border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors">
                View Subscription Plans
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-4 text-sm text-zinc-400 font-medium">
              <span className="flex items-center gap-2"><Zap className="w-4 h-4 text-amber-400" /> Instant Delivery</span>
              <span className="flex items-center gap-2"><Activity className="w-4 h-4 text-green-400" /> 99.9% Uptime</span>
              <span className="flex items-center gap-2"><Lock className="w-4 h-4 text-brand-cyan" /> Secure 256-bit Checkout</span>
              <span className="flex items-center gap-2"><Star className="w-4 h-4 text-yellow-400 fill-yellow-400" /> 4.9/5 Trustpilot</span>
            </div>
          </div>

          {/* Right Column: The Engine (Visuals) */}
          <div className="relative h-[500px] lg:h-[650px] w-full mt-12 lg:mt-0 perspective-1000">
            <div className="absolute inset-0 bg-brand-purple/20 blur-[120px] rounded-full animate-pulse" />
            
            {/* Smart TV Frame */}
            <motion.div 
              initial={{ y: 20, opacity: 0, rotateY: -5 }} animate={{ y: 0, opacity: 1, rotateY: 0 }} transition={{ duration: 0.8 }}
              className="absolute top-0 right-0 lg:right-5 w-[90%] h-[60%] rounded-2xl border border-white/10 bg-zinc-900/80 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col"
            >
              <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-50"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
              <div className="absolute bottom-6 left-6 flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-brand-cyan/20 flex items-center justify-center backdrop-blur-md border border-brand-cyan/50 text-brand-cyan pl-1">
                   <Play className="w-5 h-5 fill-current" />
                 </div>
                 <div>
                   <p className="text-white font-bold text-lg leading-tight">Premier League Live</p>
                   <p className="text-brand-cyan text-sm font-medium">4K Ultra HD</p>
                 </div>
              </div>
            </motion.div>

            {/* Tablet Frame */}
            <motion.div 
              initial={{ x: -40, y: 40, opacity: 0 }} animate={{ x: -20, y: 20, opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }}
              className="absolute bottom-24 lg:bottom-32 left-0 w-[55%] h-[40%] rounded-xl border border-white/20 bg-zinc-800/95 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden p-4 flex flex-col"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Top VOD</span>
                <span className="w-10 h-1 bg-white/20 rounded-full" />
              </div>
              <div className="grid grid-cols-2 gap-3 flex-1">
                <div className="rounded-lg bg-gradient-to-br from-zinc-700 to-zinc-800 h-full border border-white/5" />
                <div className="rounded-lg bg-gradient-to-br from-zinc-700 to-zinc-800 h-full border border-white/5" />
              </div>
            </motion.div>

            {/* Mobile Frame */}
            <motion.div 
              initial={{ x: 40, y: 60, opacity: 0 }} animate={{ x: 20, y: 40, opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-10 right-10 w-[30%] h-[55%] rounded-[2rem] border-[6px] border-zinc-800 bg-zinc-950 shadow-[0_30px_60px_rgba(0,0,0,0.6)] overflow-hidden"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-5 bg-zinc-800 rounded-b-xl" />
              <div className="w-full h-full p-4 pt-10 flex flex-col gap-4 bg-zinc-900/50">
                <div className="w-full h-28 bg-brand-purple/20 rounded-xl border border-brand-purple/30 flex items-center justify-center">
                  <PlayCircle className="text-brand-purple w-8 h-8 opacity-60" />
                </div>
                <div className="w-3/4 h-3 bg-zinc-800 rounded-full" />
                <div className="w-1/2 h-3 bg-zinc-800 rounded-full" />
                <div className="w-full h-3 bg-zinc-800 rounded-full mt-auto" />
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [-15, 15, -15] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute top-10 -left-5 p-3 lg:p-4 border border-white/10 bg-white/5 backdrop-blur-xl rounded-xl flex items-center gap-3 shadow-xl"
            >
              <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center text-red-500"><MonitorPlay size={20} /></div>
              <span className="text-sm font-bold whitespace-nowrap text-white">Live Sports - 4K</span>
            </motion.div>

            <motion.div 
              animate={{ y: [15, -15, 15] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute top-1/2 -right-10 p-3 lg:p-4 border border-white/10 bg-white/5 backdrop-blur-xl rounded-xl flex items-center gap-3 shadow-xl z-20"
            >
              <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-500"><Zap size={20} /></div>
              <span className="text-sm font-bold whitespace-nowrap text-white">Breaking News</span>
            </motion.div>
            
            <motion.div 
              animate={{ y: [-10, 10, -10] }} transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-5 -left-10 p-3 lg:p-4 border border-white/10 bg-white/5 backdrop-blur-xl rounded-xl flex items-center gap-3 shadow-xl z-20"
            >
              <div className="w-10 h-10 rounded-lg bg-brand-purple/20 flex items-center justify-center text-brand-purple"><Film size={20} /></div>
              <span className="text-sm font-bold whitespace-nowrap text-white">New Releases</span>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}

// --------------------------------------------------------
// 3. Features Section (The "Why Us" Grid)
// --------------------------------------------------------
function FeatureCard({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div 
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 p-8 backdrop-blur-xl group transition-all hover:bg-zinc-900/70"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
    >
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-0"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(0,242,254,.15), transparent 40%)`
        }}
      />
      <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform relative z-10">
        <Icon className="w-7 h-7 text-brand-cyan" />
      </div>
      <h3 className="text-2xl font-bold font-heading mb-3 text-white relative z-10">{title}</h3>
      <p className="text-zinc-400 leading-relaxed relative z-10 font-body">{description}</p>
    </div>
  );
}

function Features() {
  const features = [
    { icon: Monitor, title: "4K & Ultra HD", description: "Say goodbye to pixelated screens. Experience every detail of the match or movie with our premium 4K, FHD, and HD streaming servers." },
    { icon: Activity, title: "Advanced Anti-Freeze", description: "Stop letting buffering ruin the climax. Our robust backend infrastructure guarantees a 99.9% uptime for a freeze-free viewing experience." },
    { icon: Film, title: "Massive VOD Library", description: "Your personal cinema awaits. Dive into an ever-expanding library of the latest movies and TV shows, updated daily with IMDb ratings." },
    { icon: Smartphone, title: "Universal Compatibility", description: "Watch zen+ TV wherever you go. Fully optimized for Smart TVs, Apple TV, Firestick, MAG, iOS, and Android." }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-6xl font-heading font-extrabold mb-6 text-white">
            Experience Television <span className="bg-clip-text text-transparent bg-brand-gradient">Without Limits.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => <FeatureCard key={i} {...f} />)}
        </div>
      </div>
    </section>
  );
}

// --------------------------------------------------------
// 4. Channel Categories (Infinite Marquee)
// --------------------------------------------------------
function Marquee() {
  const categories = [
    { name: "Premium Sports", icon: Activity },
    { name: "Breaking News", icon: Globe },
    { name: "Kids & Family", icon: Monitor },
    { name: "Documentaries", icon: Film },
    { name: "International Channels", icon: Globe },
    { name: "Pay-Per-View Events", icon: Star },
    { name: "24/7 TV Shows", icon: Tv },
    { name: "Music", icon: PlayCircle }
  ];

  const renderRow = (items: typeof categories, reverse = false) => (
    <div className="flex overflow-hidden w-full group py-3">
      <div className={cn("flex w-max space-x-6 px-3", reverse ? "animate-infinite-scroll-reverse" : "animate-infinite-scroll", "group-hover:[animation-play-state:paused]")}>
        {[...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-zinc-900/50 border border-white/10 backdrop-blur-md min-w-max hover:bg-white/10 transition-colors cursor-default">
            <div className="w-8 h-8 rounded-full bg-brand-gradient flex items-center justify-center shadow-[0_0_15px_rgba(79,172,254,0.4)]">
              <item.icon className="w-4 h-4 text-zinc-950" />
            </div>
            <span className="font-semibold text-zinc-200">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-20 overflow-hidden border-y border-white/5 bg-zinc-950/50 relative">
       <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
       <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />
       <div className="text-center mb-12 relative z-20">
         <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white">Something for <span className="text-brand-cyan">Everyone</span></h2>
       </div>
       {renderRow(categories)}
       {renderRow([...categories].reverse(), true)}
    </section>
  );
}

// --------------------------------------------------------
// 5. Pricing & Subscription
// --------------------------------------------------------
function Pricing() {
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
    <section id="pricing" className="py-24 relative z-10 bg-zinc-950">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-cyan/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="text-4xl lg:text-5xl font-heading font-bold mb-4 text-white">
            Choose Your <span className="bg-clip-text text-transparent bg-brand-gradient">zen+ TV Pass</span>
          </motion.h2>
          <motion.p initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:0.1}} className="text-xl text-zinc-400 font-body">
            Simple, transparent pricing. No hidden fees. Cancel anytime.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 items-end">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
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
    </section>
  );
}

// --------------------------------------------------------
// 6. Interactive Setup Guide
// --------------------------------------------------------
function SetupGuide() {
  const steps = [
    {
      num: 1,
      title: "Step 1: Choose Your Plan",
      desc: "Select the subscription that fits your needs and complete your secure payment.",
      icon: <ShoppingCart className="w-8 h-8 text-brand-cyan" />,
      ring: "border-brand-cyan shadow-[0_0_15px_rgba(0,242,254,0.3)]"
    },
    {
      num: 2,
      title: "Step 2: Check Your Inbox",
      desc: "Receive your login credentials and personalized M3U link instantly via email.",
      icon: <Mail className="w-8 h-8 text-[#a855f7]" />,
      ring: "border-[#a855f7] shadow-[0_0_15px_rgba(168,85,247,0.3)]"
    },
    {
      num: 3,
      title: "Step 3: Connect & Enjoy",
      desc: "Download your preferred IPTV player, enter your details, and start streaming zen+ TV immediately.",
      icon: <PlayCircle className="w-8 h-8 text-[#4ade80]" />,
      ring: "border-[#4ade80] shadow-[0_0_15px_rgba(74,222,128,0.3)]"
    }
  ];

  return (
    <section className="py-24 relative bg-zinc-950">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-brand-cyan/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl lg:text-5xl font-heading font-bold mb-4 text-white">
            Setup in <span className="bg-clip-text text-transparent bg-brand-gradient">Under 5 Minutes</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-zinc-400 text-lg font-body font-medium">
            Removing the technical friction for new buyers.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              key={step.num} 
              className="bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center flex flex-col items-center hover:-translate-y-2 hover:bg-zinc-900/60 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] transition-all duration-300 group"
            >
              <div className={`w-16 h-16 rounded-full border-2 ${step.ring} flex items-center justify-center mb-8 bg-zinc-950/50 group-hover:scale-110 transition-transform duration-300`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-zinc-400 font-body text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --------------------------------------------------------
// 7. FAQ Section
// --------------------------------------------------------
function FAQ() {
  const faqs = [
    { q: "What internet speed do I need?", a: "We recommend a minimum of 15 Mbps for HD streaming, and 30 Mbps for flawless 4K UHD streaming. A wired ethernet connection provides the most stable experience." },
    { q: "Can I use it on multiple devices?", a: "Standard plans cover 1 simultaneous stream. However, you can install the app on as many devices as you want. Multi-room connections are available at checkout." },
    { q: "How long does activation take?", a: "Activation is 100% automated. Your login credentials and M3U link will be emailed to you within seconds of completing your purchase." },
    { q: "Do I need a VPN?", a: "Our service is completely VPN-friendly with no IP locking. While our infrastructure is highly secure, using a VPN is perfectly fine if your ISP throttles IPTV traffic." },
    { q: "Is an EPG (TV Guide) included?", a: "Yes, a fully integrated, regularly updated Electronic Program Guide (EPG) is included with all plans to easily navigate your channels." }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 relative bg-zinc-950">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6 text-white">Got Questions? <br/>We've Got <span className="text-brand-purple">Answers.</span></h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-white/10 rounded-2xl bg-zinc-900/30 overflow-hidden backdrop-blur-sm transition-colors hover:bg-zinc-900/50">
              <button 
                className="w-full px-6 py-6 text-left flex items-center justify-between font-bold text-lg focus:outline-none text-white"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                {faq.q}
                <ChevronDown className={cn("w-5 h-5 text-brand-cyan transition-transform duration-300", openIdx === idx && "rotate-180")} />
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-zinc-400 leading-relaxed border-t border-white/5 pt-4 font-body">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --------------------------------------------------------
// Main Page Export
// --------------------------------------------------------
export default function ZenPlusLandingPage() {
  const JSON_LD = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "zen+ TV",
    "image": "https://zenplustv.com/logo.png",
    "description": "Premium IPTV provider offering 20,000+ channels and 100k+ VODs in 4K.",
    "priceRange": "$$",
    "url": "https://zenplustv.com"
  };

  const FAQ_JSON_LD = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What internet speed do I need?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We recommend a minimum of 15 Mbps for HD streaming, and 30 Mbps for flawless 4K UHD streaming."
        }
      },
      {
        "@type": "Question",
        "name": "How long does activation take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Activation is 100% automated. Your login credentials and M3U link will be emailed to you within seconds of completing your purchase."
        }
      }
    ]
  };

  return (
    <div className="bg-zinc-950 text-zinc-50 font-body selection:bg-brand-cyan/30 selection:text-white">
      <Hero />
      <Features />
      <Marquee />
      <Pricing />
      <SetupGuide />
      <FAQ />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([JSON_LD, FAQ_JSON_LD]) }}
      />
    </div>
  );
}
