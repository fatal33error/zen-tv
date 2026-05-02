"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, Play, Monitor, Activity, Film, Smartphone, Tv, 
  ChevronDown, Zap, Lock, Star, Globe, MonitorPlay,
  PlayCircle, Mail, ShoppingCart, HelpCircle, ListVideo, CreditCard
} from 'lucide-react';
import Link from 'next/link';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ParticlesBackground } from "@/components/ui/ParticlesBackground";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { GradientText } from "@/components/ui/GradientText";
import { Badge } from "@/components/ui/Badge";

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
            <Badge icon={<Star className="w-3.5 h-3.5" />} animate>
              Voted #1 Premium Streaming Provider 2024
            </Badge>

            <h1 className="text-5xl lg:text-7xl font-heading font-extrabold leading-[1.1] tracking-tight text-white">
              Unlimited Entertainment.<br/>
              <GradientText>Zero Interruptions.</GradientText><br/>
              Welcome to zenplus TV.
            </h1>

            <p className="text-lg lg:text-xl text-zinc-400 leading-relaxed max-w-xl font-body">
              Access 20,000+ live premium channels and a massive 100,000+ VOD library in crystal-clear 4K UHD. Stream global sports, blockbuster movies, and binge-worthy series on any device, anywhere.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link href="/free-trial" className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full text-lg font-bold text-zinc-950 bg-brand-gradient shadow-[0_0_30px_rgba(0,242,254,0.3)] hover:scale-105 transition-all">
                <PlayCircle className="w-5 h-5 fill-zinc-950 text-brand-cyan group-hover:scale-110 transition-transform" />
                Start Your Free Trial
              </Link>
              <Link href="/pricing" className="px-8 py-4 rounded-full text-lg font-medium text-white border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors text-center">
                View Subscription Plans
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-4 text-sm text-zinc-400 font-medium">
              <span className="flex items-center gap-2"><Zap className="w-4 h-4 text-amber-400" /> Instant Delivery</span>
              <span className="flex items-center gap-2"><Activity className="w-4 h-4 text-green-400" /> 99.9% Uptime</span>
              <span className="flex items-center gap-2"><Lock className="w-4 h-4 text-brand-cyan" /> Secure 256-bit Checkout</span>
              <span className="flex items-center gap-2"><Star className="w-4 h-4 text-yellow-400 fill-yellow-400" /> 4.9/5 Trustpilot</span>
            </div>
          </div>
          {/* Right Column: The Engine (Visuals) */}
          <div className="relative h-[400px] lg:h-[550px] w-full mt-12 lg:mt-0 perspective-1000">
            <div className="absolute inset-0 bg-brand-purple/20 blur-[120px] rounded-full animate-pulse" />
            
            {/* Smart TV Frame */}
            <motion.div 
              initial={{ y: 20, opacity: 0, rotateY: -5 }} animate={{ y: 0, opacity: 1, rotateY: 0 }} transition={{ duration: 0.8 }}
              className="absolute top-10 lg:top-12 right-0 lg:right-5 w-[90%] h-[55%] lg:h-[60%] rounded-2xl border border-white/10 bg-zinc-900/80 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col z-10"
            >
              <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-60"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
              <div className="absolute bottom-6 left-6 flex items-center gap-4">
                 <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-brand-cyan/20 flex items-center justify-center backdrop-blur-md border border-brand-cyan/50 text-brand-cyan pl-1">
                   <Play className="w-4 h-4 lg:w-5 lg:h-5 fill-current" />
                 </div>
                 <div>
                   <p className="text-white font-bold text-base lg:text-lg leading-tight">Premier League Live</p>
                   <p className="text-brand-cyan text-xs lg:text-sm font-medium">4K Ultra HD</p>
                 </div>
              </div>
            </motion.div>

            {/* Tablet Frame */}
            <motion.div 
              initial={{ x: -40, y: 40, opacity: 0 }} animate={{ x: 0, y: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }}
              className="absolute -top-5 lg:top-0 left-0 lg:-left-5 w-[65%] lg:w-[55%] h-[45%] rounded-xl border border-white/20 bg-zinc-800/95 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden p-4 flex flex-col z-20"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-2"><Star className="w-3 h-3 text-amber-400 fill-amber-400" /> Top VOD</span>
                <span className="w-10 h-1 bg-white/20 rounded-full" />
              </div>
              <div className="grid grid-cols-2 gap-3 flex-1">
                <div className="rounded-lg bg-[url('/vod-1.jpg')] bg-cover bg-center h-full border border-white/10 shadow-inner group relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <PlayCircle className="text-white w-8 h-8" />
                  </div>
                </div>
                <div className="rounded-lg bg-[url('/vod-2.jpg')] bg-cover bg-center h-full border border-white/10 shadow-inner group relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <PlayCircle className="text-white w-8 h-8" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Mobile Frame */}
            <motion.div 
              initial={{ x: 40, y: 60, opacity: 0 }} animate={{ x: 0, y: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute bottom-0 lg:-bottom-5 right-0 lg:-right-8 w-[35%] lg:w-[32%] h-[60%] lg:h-[65%] rounded-[2rem] lg:rounded-[2.5rem] border-[6px] lg:border-[8px] border-zinc-800 bg-zinc-950 shadow-[0_30px_60px_rgba(0,0,0,0.6)] overflow-hidden z-30"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-[18px] lg:h-[22px] bg-zinc-800 rounded-b-xl z-10" />
              <div className="w-full h-full bg-[url('/mobile-ui.png')] bg-cover bg-top" />
            </motion.div>

            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [-15, 15, -15] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute bottom-5 lg:bottom-10 left-5 lg:left-10 p-3 border border-white/10 bg-white/5 backdrop-blur-xl rounded-xl flex items-center gap-3 shadow-xl z-40"
            >
              <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-500"><MonitorPlay size={16} /></div>
              <span className="text-xs font-bold whitespace-nowrap text-white">Live Sports</span>
            </motion.div>

            <motion.div 
              animate={{ y: [15, -15, 15] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute top-1/2 -right-2 lg:-right-12 p-3 border border-white/10 bg-white/5 backdrop-blur-xl rounded-xl flex items-center gap-3 shadow-xl z-40"
            >
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-500"><Zap size={16} /></div>
              <span className="text-xs font-bold whitespace-nowrap text-white">4K Channels</span>
            </motion.div>
            
            <motion.div 
              animate={{ y: [-10, 10, -10] }} transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 1 }}
              className="absolute -top-5 lg:-top-5 right-10 lg:right-20 p-3 border border-white/10 bg-white/5 backdrop-blur-xl rounded-xl flex items-center gap-3 shadow-xl z-40"
            >
              <div className="w-8 h-8 rounded-lg bg-brand-purple/20 flex items-center justify-center text-brand-purple"><Film size={16} /></div>
              <span className="text-xs font-bold whitespace-nowrap text-white">New Releases</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --------------------------------------------------------
// 2. Partner Logos (Infinite Slideshow)
// --------------------------------------------------------
function PartnerLogos() {
  const logos = [
    { name: "Netflix", src: "/partners/netflix.png" },
    { name: "HBO", src: "/partners/hbo.png" },
    { name: "Apple TV", src: "/partners/apple.png" },
    { name: "ESPN", src: "/partners/espn.png" },
    { name: "Sky Sports", src: "/partners/sky.png" },
    { name: "Prime Video", src: "/partners/prime.png" },
    { name: "DAZN", src: "/partners/dazn.png" },
    { name: "Viaplay", src: "/partners/viaplay.png" },
    { name: "Canal+", src: "/partners/canal.png" },
    { name: "Cosmote Sport", src: "/partners/cosmote.jpg" },
  ];

  return (
    <div className="py-6 bg-zinc-950/40 border-y border-white/5 overflow-hidden relative z-20">
      <div className="flex overflow-hidden w-full group relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />
        
        <div className="flex w-max space-x-16 px-8 animate-infinite-scroll group-hover:[animation-play-state:paused]">
          {[...logos, ...logos, ...logos].map((logo, idx) => (
            <div key={idx} className="flex items-center justify-center w-28 lg:w-36 h-10 lg:h-12 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500 ease-out cursor-pointer">
              <img 
                src={logo.src} 
                alt={logo.name} 
                className="max-h-full max-w-full object-contain filter invert brightness-200" 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
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
        <SectionHeader
          badgeText="Why Choose Us"
          badgeIcon={<Zap className="w-4 h-4" />}
          title="Experience Television"
          gradientTitle="Without Limits."
          description="Enjoy the ultimate streaming experience with cutting-edge technology and premium content."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <FeatureCard {...f} />
            </ScrollReveal>
          ))}
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
       <SectionHeader
         badgeText="Our Selection"
         badgeIcon={<ListVideo className="w-4 h-4" />}
         title="Something for"
         gradientTitle="Everyone"
         centered={true}
       />
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
    <section id="pricing" className="py-24 relative z-10 bg-zinc-950">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <SectionHeader
          badgeText="Pricing Plans"
          badgeIcon={<CreditCard className="w-4 h-4" />}
          title="Choose Your"
          gradientTitle="zen+ TV Pass"
          description="Simple, transparent pricing. No hidden fees. Cancel anytime."
        />

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <motion.div
                className={`relative rounded-[2rem] p-8 border flex flex-col h-full min-h-[520px] transition-all duration-300 ${
                  plan.highlight
                    ? "bg-zinc-900/40 border-brand-cyan/50 shadow-[0_0_40px_rgba(0,242,254,0.15)] transform lg:-translate-y-2"
                    : "bg-zinc-900/40 border-white/5 hover:border-white/10"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 inset-x-0 flex justify-center">
                    <div className="bg-brand-cyan text-zinc-950 text-[11px] font-bold px-5 py-1.5 rounded-full shadow-[0_4px_15px_rgba(0,242,254,0.3)]">
                      {plan.badge}
                    </div>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-heading font-bold text-zinc-100">{plan.name}</h3>
                </div>

                <div className="mb-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-6xl font-bold text-white tracking-tight">{plan.price}</span>
                    <span className="text-zinc-500 text-lg font-medium">/{plan.period}</span>
                  </div>
                  {plan.breakdown && (
                    <div className="mt-2 text-green-400 text-sm font-semibold">
                      {plan.breakdown}
                    </div>
                  )}
                </div>

                <div className="space-y-4 mb-8 flex-1 mt-6">
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm text-zinc-400 font-body">
                      <Check className={`w-4 h-4 flex-shrink-0 ${plan.highlight ? 'text-brand-cyan' : 'text-green-500'}`} />
                      {feat}
                    </div>
                  ))}
                </div>

                <button
                  className={`w-full py-4 rounded-full font-heading font-bold transition-all duration-300 ${
                    plan.highlight
                      ? "bg-brand-gradient text-zinc-950 hover:shadow-[0_0_25px_rgba(0,242,254,0.4)] hover:scale-[1.02]"
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
        <SectionHeader
          badgeText="How It Works"
          badgeIcon={<PlayCircle className="w-4 h-4" />}
          title="Setup in"
          gradientTitle="Under 5 Minutes"
          description="Removing the technical friction for new buyers."
        />

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <ScrollReveal key={step.num} delay={i * 0.1}>
              <div 
                className="bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center flex flex-col items-center hover:-translate-y-2 hover:bg-zinc-900/60 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] transition-all duration-300 group h-full"
              >
                <div className={`w-16 h-16 rounded-full border-2 ${step.ring} flex items-center justify-center mb-8 bg-zinc-950/50 group-hover:scale-110 transition-transform duration-300`}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-zinc-400 font-body text-sm leading-relaxed">{step.desc}</p>
              </div>
            </ScrollReveal>
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
        <SectionHeader
          badgeText="Support & FAQ"
          badgeIcon={<HelpCircle className="w-4 h-4" />}
          title="Got Questions?"
          gradientTitle="We've Got Answers."
          centered={true}
        />
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1} direction="up">
              <div className="border border-white/10 rounded-2xl bg-zinc-900/30 overflow-hidden backdrop-blur-sm transition-colors hover:bg-zinc-900/50">
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
            </ScrollReveal>
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
      <PartnerLogos />
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
