"use client";

import { targets } from "@/data/services";
import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import FeatureCard from "../ui/FeatureCard";
import { staggerContainer, viewportConfig } from "@/lib/motion";

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
          <FeatureCard
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.content}
            index={index}
            layout="target"
          />
        ))}
      </motion.div>
    </section>
  );
}

export default Target;
