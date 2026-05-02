import React from "react";
import { motion } from "framer-motion";

interface BadgeProps {
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}

export function Badge({ icon, children, className = "", animate = false }: BadgeProps) {
  const content = (
    <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-zinc-300 backdrop-blur-md text-xs font-bold tracking-widest uppercase shadow-sm ${className}`}>
      {icon && <span className="flex items-center justify-center text-brand-cyan">{icon}</span>}
      {children}
    </div>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        {content}
      </motion.div>
    );
  }

  return content;
}
