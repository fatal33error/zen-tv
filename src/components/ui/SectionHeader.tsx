"use client";

import React from "react";
import { motion } from "framer-motion";
import { GradientText } from "./GradientText";
import { Badge } from "./Badge";

interface SectionHeaderProps {
  badgeIcon?: React.ReactNode;
  badgeText?: string;
  title: string;
  gradientTitle?: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeader({
  badgeIcon,
  badgeText,
  title,
  gradientTitle,
  description,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={`mb-16 max-w-4xl ${centered ? "text-center mx-auto" : ""}`}>
      {(badgeIcon || badgeText) && (
        <Badge icon={badgeIcon} animate className={`mb-6 ${!centered ? "" : "mx-auto"}`}>
          {badgeText}
        </Badge>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight mb-6 text-white leading-tight"
      >
        {title}{" "}
        {gradientTitle && (
          <GradientText>{gradientTitle}</GradientText>
        )}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={`text-xl text-zinc-400 font-body leading-relaxed max-w-3xl ${centered ? "mx-auto" : ""}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
