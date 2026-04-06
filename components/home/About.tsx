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

export default function About() {
  return (
    <section id="about" className="section relative overflow-hidden bg-surface">
      {/* Decorative shapes - updated to use theme colors */}
      <div className="absolute w-8 h-8 bg-primary/20 rounded-full top-40 left-20 blur-2xl animate-pulse" />
      <div className="absolute w-6 h-6 bg-accent-purple/20 rounded-full bottom-40 right-20 blur-xl animate-pulse delay-1000" />
      <div className="absolute w-10 h-10 border-2 border-primary/20 rounded-xl bottom-72 right-72 rotate-45 hidden lg:block" />
      <div className="absolute w-6 h-6 border border-primary/20 rounded-full bottom-10 right-1/2 hidden md:block" />

      {/* Animated gradient orb */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
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
            className="btn btn-primary rounded-xl inline-flex items-center gap-2 group"
          >
            Download CV
            <svg
              className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300"
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
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent-purple/20 to-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Main image container */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden">
              {/* Animated border */}
              <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-primary/50 transition-all duration-500 z-10" />

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
            <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-primary/20 rounded-full hidden lg:block group-hover:rotate-45 transition-transform duration-500" />
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary/10 rounded-full hidden lg:block group-hover:scale-150 transition-transform duration-500" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}