"use client";

import { aboutPersonalInfoItems } from "@/data/others";
import { AboutPersonalInfoItem } from "./AboutPersonalInfoItem";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeLeftVariant,
  fadeRightVariant,
  fadeUpVariant,
  hoverScale,
  viewportConfig,
  staggerContainer
} from "@/lib/motion";

// =========================
// Floating Shapes Component
// =========================
const FloatingShapes = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Animated Triangle */}
    <motion.div
      animate={{
        y: [0, -30, 0],
        x: [0, 20, 0],
        rotate: [0, 360],
      }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-20 left-10 w-12 h-12 opacity-20"
    >
      <div className="w-0 h-0 border-l-[25px] border-l-transparent border-r-[25px] border-r-transparent border-b-[43px] border-b-primary/30" />
    </motion.div>

    {/* Animated Square */}
    <motion.div
      animate={{
        y: [0, 25, 0],
        x: [0, -15, 0],
        rotate: [0, -360],
      }}
      transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      className="absolute bottom-32 right-20 w-10 h-10 opacity-20"
    >
      <div className="w-full h-full border-2 border-accent-purple/30 rounded-lg rotate-12" />
    </motion.div>

    {/* Animated Circle */}
    <motion.div
      animate={{
        scale: [1, 1.3, 1],
        opacity: [0.15, 0.3, 0.15],
      }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      className="absolute top-1/3 right-1/5 w-20 h-20"
    >
      <div className="w-full h-full border border-primary/20 rounded-full" />
    </motion.div>

    {/* Floating Dots Cluster */}
    {[...Array(10)].map((_, i) => (
      <motion.div
        key={i}
        animate={{
          y: [0, -35, 0],
          x: [0, Math.sin(i) * 25, 0],
          opacity: [0.1, 0.35, 0.1],
        }}
        transition={{
          duration: 4 + (i % 3),
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 0.25,
        }}
        className="absolute w-1.5 h-1.5 bg-primary/40 rounded-full"
        style={{
          top: `${5 + (i * 7)}%`,
          left: `${90 + (i * 2)}%`,
        }}
      />
    ))}

    {/* Left side floating dots */}
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={`left-${i}`}
        animate={{
          y: [0, -25, 0],
          x: [0, 15, 0],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 5 + (i % 4),
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 0.3,
        }}
        className="absolute w-1 h-1 bg-accent-purple/40 rounded-full"
        style={{
          top: `${10 + (i * 9)}%`,
          left: `${2 + (i * 5)}%`,
        }}
      />
    ))}
  </div>
);

export default function About() {
  return (
    <section id="about" className="section relative overflow-hidden bg-surface">
      {/* Floating Shapes */}
      <FloatingShapes />

      {/* Decorative shapes */}
      <div className="absolute w-8 h-8 bg-primary/20 rounded-full top-40 left-20 blur-2xl animate-pulse" />
      <div className="absolute w-6 h-6 bg-accent-purple/20 rounded-full bottom-40 right-20 blur-xl animate-pulse delay-1000" />
      <div className="absolute w-10 h-10 border-2 border-primary/20 rounded-xl bottom-72 right-72 rotate-45 hidden lg:block animate-spin-slow" />
      <div className="absolute w-6 h-6 border border-primary/20 rounded-full bottom-10 right-1/2 hidden md:block animate-pulse" />

      {/* Animated gradient orb */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Center glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]"
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, delay: 2 }}
      />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #fe4e59 1.5px, transparent 1.5px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16 relative z-10">
        {/* Left Content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex-1"
        >
          <motion.span
            variants={fadeUpVariant()}
            className="inline-block text-primary text-sm md:text-base font-semibold uppercase tracking-[0.2em] mb-3"
          >
            About me
          </motion.span>

          <motion.h3
            variants={fadeUpVariant()}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4"
          >
            Developer <span className="text-primary">For You</span>
          </motion.h3>

          <motion.p
            variants={fadeUpVariant()}
            className="text-text-secondary text-lg max-w-xl mb-8 leading-relaxed"
          >
            Passionate web developer and designer crafting innovative,
            functional digital experiences with precision and care.
          </motion.p>

          {/* Personal info grid */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8"
          >
            {aboutPersonalInfoItems.map((item, i) => (
              <motion.div key={i} variants={fadeUpVariant()}>
                <AboutPersonalInfoItem item={item} />
              </motion.div>
            ))}
          </motion.div>

          {/* Button with hover animation */}
          <motion.a
            variants={fadeUpVariant()}
            {...hoverScale}
            href="/doc/cv.pdf"
            target="_blank"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl font-bold overflow-hidden shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300"
          >
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.4 }}
            />
            <span className="relative z-10">Download CV</span>
            <svg
              className="relative z-10 w-5 h-5 group-hover:translate-y-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </motion.a>
        </motion.div>

        {/* Right Image with enhanced effects */}
        <motion.div
          variants={fadeRightVariant()}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex-1 flex justify-center items-center"
        >
          <div className="relative group">
            {/* Glowing ring effect */}
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent-purple/20 to-primary/20 rounded-full blur-xl"
            />

            {/* Main image container */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden">
              {/* Animated border */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-primary/50 transition-all duration-500 z-10"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              {/* Image */}
              <Image
                src="/images/avatar.png"
                alt="Sahos Mia"
                fill
                className="object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                priority
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-surface/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Decorative dots around image */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -top-6 -right-6 w-24 h-24 border-2 border-primary/20 rounded-full hidden lg:block"
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 w-14 h-14 bg-primary/10 rounded-full hidden lg:block"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}