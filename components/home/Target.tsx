"use client";

import { targets } from "@/data/services";
import { motion } from "framer-motion";
import Link from "next/link";
import DynamicIcon from "../core/DynamicIcon";
import SectionHeader from "../ui/SectionHeader";
import { staggerContainer, fadeUpVariant, hoverLift, viewportConfig } from "@/lib/motion";

function Target() {
  return (
    <section className="section relative overflow-hidden bg-surface">
      {/* Animated Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl"
        />
      </div>

      {/* Section Header */}
      <SectionHeader
        badge="What I Deliver"
        title="My Core Targets"
        titleHighlight="Targets"
        subtitle="Every project I undertake focuses on these key principles"
        centered={true}
      />

      {/* Cards Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="container mx-auto px-4 md:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >
        {targets.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeUpVariant(index * 0.1)}
            {...hoverLift}
            className="
              group relative p-6 md:p-8 rounded-3xl
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
              <DynamicIcon name={item.icon} />
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
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-text-secondary text-sm md:text-base leading-relaxed relative z-10">
              {item.content}
            </p>            

            {/* Decorative line that appears on hover */}
            <motion.div
              initial={{ width: 0 }}
              whileHover={{ width: "40px" }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-6 left-6 h-0.5 bg-primary/50 rounded-full"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Target;