"use client";
import { services } from "@/data/services";
import SectionHead from "./SectionHead";
import { motion } from "framer-motion";
import FeatureCard from "../ui/FeatureCard";
import {
  staggerContainer,
  viewportConfig,
} from "@/lib/motion";

function Service() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={viewportConfig}
      className="section relative overflow-hidden bg-gradient-to-br from-surface via-surface-muted to-surface"
      id="service"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent-green/10 rounded-full blur-3xl"
        />
      </div>

      <SectionHead
        title="My Services"
        des="What I offer to my clients"
        centered={true}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="container mx-auto px-4 md:px-6 mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >
        {services.map((item, index) => (
          <FeatureCard
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
            index={index}
            layout="service"
          />
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Service;
