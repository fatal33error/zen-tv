"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, ChevronRight, ChevronDown } from "lucide-react";

export default function FreeTrialPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="pt-32 pb-20 relative min-h-screen flex items-center justify-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-cyan/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Col */}
          <div>
            <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration: 0.5}}>
               <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 text-sm font-medium text-brand-cyan">
                  <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" /> 24-Hour Free Access
               </div>
               <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight mb-6 leading-tight text-white">
                  Try Before You <br/> <span className="bg-clip-text text-transparent bg-brand-gradient">Commit.</span>
               </h1>
               <p className="text-zinc-400 leading-relaxed mb-8 text-lg font-body">
                  Experience the ultimate streaming quality with zero buffering. Get access to our entire library of live channels, movies, and series for free.
               </p>
               
               <div className="space-y-4 mb-8">
                  {[
                    "Instant activation upon request",
                    "Access to all 20,000+ live channels",
                    "Full VOD library in 4K/HD",
                    "No credit card required"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                       <Check className="w-5 h-5 text-brand-purple" />
                       <span className="font-medium text-zinc-300">{feature}</span>
                    </div>
                  ))}
               </div>
            </motion.div>
          </div>

          {/* Right Col: Form */}
          <motion.div initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} transition={{duration: 0.5, delay: 0.2}} className="w-full max-w-md mx-auto lg:mx-0">
             <div className="p-8 rounded-3xl border border-white/10 bg-zinc-900/50 shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-xl relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-1 bg-brand-gradient" />
                
                {submitted ? (
                   <div className="text-center py-10">
                      <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                         <Check className="w-8 h-8 text-green-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2 font-heading">Check Your Inbox!</h3>
                      <p className="text-zinc-400 mb-6 font-body">We've sent your 24-hour trial details and setup instructions.</p>
                      <button onClick={() => setSubmitted(false)} className="px-6 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-colors text-white">Request another</button>
                   </div>
                ) : (
                   <form onSubmit={async (e) => { 
                          e.preventDefault(); 
                          const form = e.target as HTMLFormElement;
                          const formData = new FormData(form);
                          formData.append("access_key", "1c1ba7d4-77fd-4963-a55c-44a890f9bdc3");
                          // Add subject for free trial request
                          formData.append("subject", "New Free Trial Request");
                          
                          try {
                             await fetch("https://api.web3forms.com/submit", {
                                method: "POST",
                                body: formData
                             });
                             setSubmitted(true);
                             form.reset();
                          } catch (error) {
                             console.error("Error submitting form", error);
                          }
                       }} className="space-y-5">
                     <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-2">Full Name</label>
                        <input required type="text" name="name" className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-cyan transition-colors" placeholder="John Doe" />
                     </div>
                     <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-2">Email Address</label>
                        <input required type="email" name="email" className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-cyan transition-colors" placeholder="john@example.com" />
                     </div>
                     <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-2">Primary Device</label>
                        <div className="relative">
                           <select name="device" className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-cyan appearance-none transition-colors">
                              <option>Smart TV (Samsung, LG)</option>
                              <option>Firestick / Android TV</option>
                              <option>Apple TV</option>
                              <option>Smartphone / Tablet</option>
                              <option>PC / Mac</option>
                           </select>
                           <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
                        </div>
                     </div>
                     
                     <button type="submit" className="w-full py-4 mt-4 rounded-xl font-bold text-zinc-950 bg-brand-gradient hover:scale-105 transition-transform shadow-[0_0_20px_rgba(0,242,254,0.3)] flex items-center justify-center gap-2">
                        Get Instant Access <ChevronRight className="w-4 h-4" />
                     </button>
                     <p className="text-center text-xs text-zinc-500 mt-4">By submitting, you agree to our Terms of Service.</p>
                   </form>
                )}
             </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
