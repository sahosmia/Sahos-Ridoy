"use client";
import { services } from "@/data/services";
import SectionHead from "./SectionHead";
import { motion } from "framer-motion";
import DynamicIcon from "../core/DynamicIcon";
import {
  fadeUpVariant,
  staggerContainer,
  viewportConfig,
  hoverLift,
  hoverScale
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
          <motion.div
            key={index}
            variants={fadeUpVariant(index * 0.1)}
            {...hoverLift}
            className="group relative"
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
                  name={item.icon}
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
                {item.title}
              </h4>

              {/* Description */}
              <p className="
                text-text-secondary text-sm md:text-base 
                text-center leading-relaxed
              ">
                {item.description}
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
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Service;