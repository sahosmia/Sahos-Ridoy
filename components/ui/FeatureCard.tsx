"use client";

import React from "react";
import { motion } from "framer-motion";
import DynamicIcon from "../core/DynamicIcon";
import {
  fadeUpVariant,
  hoverLift,
  hoverScale,
} from "@/lib/motion";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  index: number;
  layout: "service" | "target" | "list";
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  index,
  layout,
}) => {
  if (layout === "service") {
    return (
      <motion.div
        variants={fadeUpVariant(index * 0.1)}
        {...hoverLift}
        className="group relative h-full"
      >
        <div className="
          relative h-full rounded-3xl p-6 md:p-8
          bg-surface-muted/50 backdrop-blur-sm
          border border-surface-border
          hover:border-primary/50
          transition-all duration-500
          overflow-hidden
        ">
          {/* Animated gradient background on hover */}
          <div className="
            absolute inset-0
            bg-gradient-to-br from-primary/5 via-transparent to-accent-purple/5
            opacity-0 group-hover:opacity-100
            transition-opacity duration-700
          " />

          {/* Top Accent Line - Animated */}
          <motion.div
            initial={{ width: 0 }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.5 }}
            className="
              absolute top-0 left-0 h-1
              bg-gradient-to-r from-primary to-accent-purple
              rounded-t-full
            "
          />

          {/* Icon Container */}
          <motion.div
            {...hoverScale}
            className="
              flex justify-center items-center
              w-20 h-20 mx-auto mb-6
              rounded-2xl
              bg-gradient-to-br from-primary/20 to-primary/5
              border border-primary/20
              group-hover:border-primary/50
              group-hover:shadow-lg group-hover:shadow-primary/20
              transition-all duration-500
            "
          >
            <DynamicIcon
              name={icon}
              className="text-primary text-3xl md:text-4xl transition-transform duration-500 group-hover:scale-110"
            />
          </motion.div>

          {/* Title */}
          <h4 className="
            text-text-primary text-xl md:text-2xl font-bold
            text-center mb-3
            group-hover:text-primary
            transition-colors duration-300
          ">
            {title}
          </h4>

          {/* Description */}
          <p className="
            text-text-secondary text-sm md:text-base
            text-center leading-relaxed
          ">
            {description}
          </p>

          {/* Decorative dot pattern at bottom */}
          <div className="
            absolute bottom-4 right-4
            opacity-0 group-hover:opacity-100
            transition-opacity duration-500
          ">
            <div className="flex gap-1">
              <div className="w-1 h-1 rounded-full bg-primary/40" />
              <div className="w-1 h-1 rounded-full bg-primary/60" />
              <div className="w-1 h-1 rounded-full bg-primary/80" />
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  if (layout === "target") {
    return (
      <motion.div
        variants={fadeUpVariant(index * 0.1)}
        {...hoverLift}
        className="
          group relative p-6 md:p-8 rounded-3xl h-full
          bg-surface-muted
          border border-surface-border
          hover:border-primary/40
          transition-all duration-500
          overflow-hidden
          cursor-pointer
        "
      >
        {/* Card Number Badge */}
        <div className="absolute top-4 right-4 z-20">
          <span className="
            flex items-center justify-center
            w-8 h-8 rounded-full
            bg-primary/10 text-primary
            text-sm font-bold
            border border-primary/20
            group-hover:bg-primary group-hover:text-white
            group-hover:border-primary
            transition-all duration-300
          ">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        {/* Animated gradient background on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Glowing orb effect */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-700" />

        {/* Icon Container */}
        <motion.div
          whileHover={{ rotate: 5, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400 }}
          className="
            w-16 h-16 flex items-center justify-center
            rounded-2xl
            bg-gradient-to-br from-primary/20 to-primary/5
            text-primary text-3xl md:text-4xl
            mb-5 md:mb-6
            relative z-10
          "
        >
          <DynamicIcon name={icon} />
        </motion.div>

        {/* Title */}
        <h3
          className="
            text-text-primary text-xl md:text-2xl font-bold
            mb-2 md:mb-3
            group-hover:text-primary
            transition-colors duration-300
            relative z-10
          "
        >
          {title}
        </h3>

        {/* Description */}
        <p className="text-text-secondary text-sm md:text-base leading-relaxed relative z-10">
          {description}
        </p>

        {/* Decorative line that appears on hover */}
        <motion.div
          initial={{ width: 0 }}
          whileHover={{ width: "40px" }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-6 left-6 h-0.5 bg-primary/50 rounded-full"
        />
      </motion.div>
    );
  }

  // list layout
  return (
    <motion.div
      variants={fadeUpVariant(0.3 + index * 0.1)}
      {...hoverLift}
      className="group flex flex-col sm:flex-row gap-4 sm:gap-5 p-4 rounded-2xl hover:bg-surface-muted transition-all duration-500 h-full"
    >
      {/* Icon */}
      <motion.div
        {...hoverScale}
        className="flex-shrink-0"
      >
        <span className="
          flex items-center justify-center
          w-14 h-14 md:w-16 md:h-16
          rounded-2xl
          bg-gradient-to-br from-primary/20 to-primary/5
          text-primary text-xl md:text-2xl
          shadow-lg shadow-primary/20
          group-hover:shadow-xl group-hover:shadow-primary/30
          group-hover:scale-110
          transition-all duration-500
        ">
          <DynamicIcon name={icon} />
        </span>
      </motion.div>

      {/* Content */}
      <div className="flex-1">
        <h5 className="
          text-text-primary text-lg md:text-xl font-bold
          mb-1 md:mb-2
          group-hover:text-primary
          transition-colors duration-300
        ">
          {title}
        </h5>
        <p className="text-text-secondary text-sm md:text-base leading-relaxed">
          {description}
        </p>
      </div>

      {/* Decorative arrow on hover */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="hidden lg:flex items-center"
      >
        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default FeatureCard;
