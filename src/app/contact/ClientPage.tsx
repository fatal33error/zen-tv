"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Mail, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="pt-32 pb-20 relative min-h-screen">
       <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight mb-4 text-white">
               Get in <span className="bg-clip-text text-transparent bg-brand-gradient">Touch.</span>
            </motion.h1>
            <motion.p initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.1}} className="text-lg text-zinc-400 max-w-2xl mx-auto font-body">
               Need help setting up? Have a billing question? Our expert team is available 24/7.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
             <div className="lg:col-span-1 space-y-6">
                {/* Contact Methods */}
                <div className="bg-zinc-900/50 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                   <div className="w-10 h-10 rounded-full bg-brand-cyan/10 text-brand-cyan flex items-center justify-center mb-4">
                      <MessageSquare className="w-5 h-5" />
                   </div>
                   <h3 className="font-bold text-white mb-2 font-heading">Live Chat</h3>
                   <p className="text-sm text-zinc-400 mb-4 font-body">The fastest way to get support. Available directly in the Client Portal.</p>
                   <a href="#" className="text-brand-cyan text-sm font-medium hover:underline">Open Live Chat</a>
                </div>

                <div className="bg-zinc-900/50 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                   <div className="w-10 h-10 rounded-full bg-brand-purple/10 text-brand-purple flex items-center justify-center mb-4">
                      <Mail className="w-5 h-5" />
                   </div>
                   <h3 className="font-bold text-white mb-2 font-heading">Email Support</h3>
                   <p className="text-sm text-zinc-400 mb-4 font-body">Prefer email? Drop us a line and we'll reply within 24 hours.</p>
                   <a href="mailto:support@zentv.io" className="text-brand-purple text-sm font-medium hover:underline">support@zentv.io</a>
                </div>
             </div>

             <div className="lg:col-span-2">
                <div className="bg-zinc-900/50 p-8 rounded-3xl border border-white/10 backdrop-blur-sm shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                   {submitted ? (
                      <div className="text-center py-16">
                         <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                            <CheckCircle2 className="w-8 h-8 text-green-400" />
                         </div>
                         <h3 className="text-2xl font-bold text-white mb-2 font-heading">Message Sent!</h3>
                         <p className="text-zinc-400 mb-6 font-body">We've received your inquiry and a support agent will get back to you shortly.</p>
                         <button onClick={() => setSubmitted(false)} className="px-6 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-colors text-white">Send another message</button>
                      </div>
                   ) : (
                      <form onSubmit={async (e) => { 
                          e.preventDefault(); 
                          const form = e.target as HTMLFormElement;
                          const formData = new FormData(form);
                          formData.append("access_key", "1c1ba7d4-77fd-4963-a55c-44a890f9bdc3");
                          
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
                       }} className="space-y-6">
                         <div className="grid md:grid-cols-2 gap-6">
                            <div>
                               <label className="block text-sm font-medium text-zinc-400 mb-2">Full Name</label>
                               <input required type="text" name="name" className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-cyan transition-colors" placeholder="John Doe" />
                            </div>
                            <div>
                               <label className="block text-sm font-medium text-zinc-400 mb-2">Email Address</label>
                               <input required type="email" name="email" className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-cyan transition-colors" placeholder="john@example.com" />
                            </div>
                         </div>
                         <div>
                            <label className="block text-sm font-medium text-zinc-400 mb-2">Subject</label>
                            <input required type="text" name="subject" className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-cyan transition-colors" placeholder="How can we help?" />
                         </div>
                         <div>
                            <label className="block text-sm font-medium text-zinc-400 mb-2">Message</label>
                            <textarea required rows={5} name="message" className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-cyan transition-colors resize-none" placeholder="Type your message here..."></textarea>
                         </div>
                         <button type="submit" className="px-8 py-4 rounded-xl font-bold text-zinc-950 bg-brand-gradient hover:scale-105 transition-all shadow-[0_0_20px_rgba(0,242,254,0.3)]">
                            Send Message
                         </button>
                      </form>
                   )}
                </div>
             </div>
          </div>
       </div>
    </div>
  );
}
