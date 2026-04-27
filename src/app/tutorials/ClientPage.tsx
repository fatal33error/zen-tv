"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tv, Smartphone, MonitorPlay, Zap, Download, Settings, PlayCircle } from "lucide-react";
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function TutorialsPage() {
  const devices = [
    {
      id: "smart-tv",
      icon: <Tv className="w-8 h-8" />,
      title: "Smart TV",
      desc: "Samsung Tizen, LG WebOS, Android TV",
      app: "IPTV Smarters Pro or TiviMate",
    },
    {
      id: "firestick",
      icon: <Zap className="w-8 h-8" />,
      title: "Amazon Firestick",
      desc: "All generations of Fire TV Stick & Cube",
      app: "Downloader App -> Smarters",
    },
    {
      id: "apple",
      icon: <MonitorPlay className="w-8 h-8" />,
      title: "Apple Ecosystem",
      desc: "Apple TV, iPhone, iPad",
      app: "Smarters Player Lite or GSE IPTV",
    },
    {
      id: "mobile",
      icon: <Smartphone className="w-8 h-8" />,
      title: "Android Mobile",
      desc: "Phones and Tablets running Android",
      app: "TiviMate or IPTV Smarters Pro",
    }
  ];

  const [selectedDevice, setSelectedDevice] = useState(devices[0]);

  return (
    <div className="pt-32 pb-20 relative min-h-screen">
       <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight mb-4 text-white">
               Setup <span className="bg-clip-text text-transparent bg-brand-gradient">Tutorials.</span>
            </motion.h1>
            <motion.p initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.1}} className="text-lg text-zinc-400 font-body">
               Follow our simple step-by-step guides to get zen+ TV running on your favorite device in minutes.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
             {/* Sidebar */}
             <div className="lg:col-span-4 space-y-3">
                {devices.map((device) => (
                   <button 
                      key={device.id}
                      onClick={() => setSelectedDevice(device)}
                      className={cn(
                         "w-full text-left p-5 rounded-2xl border transition-all flex items-center gap-4",
                         selectedDevice.id === device.id 
                         ? "bg-zinc-900 border-brand-cyan/50 shadow-[0_0_20px_rgba(0,242,254,0.15)]" 
                         : "bg-white/5 border-white/5 hover:bg-white/10"
                      )}
                   >
                      <div className={cn("p-3 rounded-xl transition-colors", selectedDevice.id === device.id ? "bg-brand-cyan/10 text-brand-cyan" : "bg-white/5 text-zinc-400")}>
                         {device.icon}
                      </div>
                      <div>
                         <h3 className={cn("font-bold font-heading", selectedDevice.id === device.id ? "text-white" : "text-zinc-300")}>{device.title}</h3>
                         <p className="text-xs text-zinc-500 mt-1 font-body">{device.desc}</p>
                      </div>
                   </button>
                ))}
             </div>

             {/* Content */}
             <div className="lg:col-span-8">
                <AnimatePresence mode="wait">
                   <motion.div
                      key={selectedDevice.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="bg-zinc-900/50 border border-white/10 rounded-3xl p-8 lg:p-12 backdrop-blur-sm relative overflow-hidden"
                   >
                      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/10 rounded-full blur-[80px] pointer-events-none" />
                      
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-lg text-sm text-zinc-400 mb-6 font-medium relative z-10">
                         Recommended App: <span className="text-brand-cyan">{selectedDevice.app}</span>
                      </div>
                      
                      <h2 className="text-3xl font-heading font-bold mb-8 text-white relative z-10">How to install on {selectedDevice.title}</h2>

                      <div className="space-y-10 relative z-10 before:absolute before:inset-y-0 before:left-[19px] before:w-0.5 before:bg-white/10">
                         {/* Step 1 */}
                         <div className="relative flex gap-6">
                            <div className="w-10 h-10 rounded-full bg-zinc-950 border-2 border-white/20 flex items-center justify-center shrink-0 mt-1 z-10 text-zinc-400">
                               <Download className="w-4 h-4" />
                            </div>
                            <div>
                               <h3 className="text-xl font-heading font-bold mb-2 text-white">1. Download the App</h3>
                               <p className="text-zinc-400 leading-relaxed font-body">Search for the recommended app in your device's official app store (Google Play, Amazon Appstore, Apple App Store, LG Content Store). Download and install it.</p>
                            </div>
                         </div>

                         {/* Step 2 */}
                         <div className="relative flex gap-6">
                            <div className="w-10 h-10 rounded-full bg-zinc-950 border-2 border-white/20 flex items-center justify-center shrink-0 mt-1 z-10 text-zinc-400">
                               <Settings className="w-4 h-4" />
                            </div>
                            <div>
                               <h3 className="text-xl font-heading font-bold mb-2 text-white">2. Enter API Credentials</h3>
                               <p className="text-zinc-400 leading-relaxed mb-4 font-body">Open the app and choose "Login with Xtream Codes API". Enter the credentials you received in your welcome email.</p>
                               <div className="bg-zinc-950 rounded-xl p-5 border border-white/5 font-mono text-sm space-y-2 shadow-inner">
                                  <div className="flex gap-4">
                                     <span className="text-zinc-500 w-24">Portal URL:</span>
                                     <span className="text-brand-cyan">http://premium-server.tv:8080</span>
                                  </div>
                                  <div className="flex gap-4">
                                     <span className="text-zinc-500 w-24">Username:</span>
                                     <span className="text-zinc-300">your_username</span>
                                  </div>
                                  <div className="flex gap-4">
                                     <span className="text-zinc-500 w-24">Password:</span>
                                     <span className="text-zinc-300">your_password</span>
                                  </div>
                               </div>
                            </div>
                         </div>

                         {/* Step 3 */}
                         <div className="relative flex gap-6">
                            <div className="w-10 h-10 rounded-full bg-zinc-950 border-2 border-brand-cyan flex items-center justify-center shrink-0 mt-1 z-10 text-brand-cyan shadow-[0_0_15px_rgba(0,242,254,0.4)]">
                               <PlayCircle className="w-4 h-4" />
                            </div>
                            <div>
                               <h3 className="text-xl font-heading font-bold mb-2 text-white">3. Start Streaming</h3>
                               <p className="text-zinc-400 leading-relaxed font-body">Click "Add User" or "Login". The app will download the channels and VOD library. You're ready to go!</p>
                            </div>
                         </div>
                      </div>

                   </motion.div>
                </AnimatePresence>
             </div>
          </div>
       </div>
    </div>
  );
}
