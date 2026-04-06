"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { socials_links } from "@/constants";
import { fadeUpVariant, staggerContainer, viewportConfig, hoverScale } from "@/lib/motion";

function ProjectTogether() {
  const [isHovered, setIsHovered] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={viewportConfig}
      className="section relative overflow-hidden"
      style={{ opacity }}
    >
      {/* BACKGROUND EFFECTS - পুরোপুরি ডার্ক */}
      <div className="absolute inset-0 bg-gradient-to-br from-surface via-surface to-primary/5" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-40 -left-20 w-96 h-96 bg-accent-purple/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.3, 0.15],
            x: [0, 50, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        />
      </div>

      {/* গ্রিড প্যাটার্ন - ডার্ক */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #fe4e59 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="relative rounded-3xl overflow-hidden shadow-2xl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Background Image */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/bg-1.jpg')" }}
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />

          {/* Dark Overlay - কোন হোয়াইট নেই */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/90 to-black/85" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />

          {/* Animated Border Gradient */}
          <motion.div
            className="absolute inset-0 rounded-3xl"
            style={{
              background: "linear-gradient(90deg, #fe4e59, #836AF0, #1CBE59, #fe4e59)",
              padding: "2px",
              borderRadius: "inherit",
              mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
          >
            <motion.div
              className="absolute inset-0 rounded-3xl"
              animate={{
                background: [
                  "linear-gradient(90deg, #fe4e59, #836AF0, #1CBE59, #fe4e59)",
                  "linear-gradient(270deg, #fe4e59, #836AF0, #1CBE59, #fe4e59)",
                  "linear-gradient(90deg, #fe4e59, #836AF0, #1CBE59, #fe4e59)",
                ],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              style={{
                inset: "-2px",
                borderRadius: "inherit",
                filter: "blur(8px)",
                opacity: 0.4,
              }}
            />
          </motion.div>

          {/* Content */}
          <div className="relative z-20 py-16 px-6 md:py-20 lg:py-24 md:px-10 lg:px-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Left Content */}
              <motion.div variants={staggerContainer} className="space-y-6">
                {/* Premium Badge */}
                <motion.div variants={fadeUpVariant(0)}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                    </span>
                    <span className="text-primary text-xs font-semibold uppercase tracking-wider">
                      Limited Slots Available
                    </span>
                  </div>
                </motion.div>

                {/* Title */}
                <motion.div variants={fadeUpVariant(0.1)}>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="text-white">Have a</span>
                    <br />
                    <span className="bg-gradient-to-r from-primary via-accent-purple to-primary bg-clip-text text-transparent">
                      Project
                    </span>
                    <span className="text-white"> idea?</span>
                    <br />
                    <span className="text-white">Let&apos;s work together!</span>
                  </h2>
                </motion.div>

                {/* Description */}
                <motion.div variants={fadeUpVariant(0.2)} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-lg">
                    Do you fancy saying hi to me or do you want to get started with
                    your project and you need my help? Feel free to contact me.
                  </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div variants={fadeUpVariant(0.3)} className="flex flex-wrap gap-4 pt-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href="/contact"
                      className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-primary-dark rounded-xl font-semibold text-white overflow-hidden shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300"
                    >
                      <span className="relative z-10">Start a Project</span>
                      <svg className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                      <motion.div
                        className="absolute inset-0 bg-primary/20"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href="#portfolio"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-black/40 rounded-xl font-semibold text-white border border-primary/10 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                    >
                      View Portfolio
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-6 6m0 0l-6-6m6 6V3" />
                      </svg>
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Right Content - Stats & Social */}
              <motion.div variants={staggerContainer} className="space-y-8">
                {/* Stats Cards */}
                <motion.div variants={fadeUpVariant(0)} className="grid grid-cols-3 gap-4">
                  {[
                    { value: "50+", label: "Projects", icon: "🚀" },
                    { value: "30+", label: "Clients", icon: "😊" },
                    { value: "98%", label: "Satisfaction", icon: "⭐" },
                  ].map((stat, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -5 }}
                      className="text-center p-4 rounded-2xl bg-black/40 border border-primary/10 hover:border-primary/30 transition-all duration-300"
                    >
                      <div className="text-2xl mb-1">{stat.icon}</div>
                      <div className="text-2xl font-bold text-primary">{stat.value}</div>
                      <div className="text-text-muted text-xs">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Social Links */}
                <motion.div variants={fadeUpVariant(0.1)} className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                    <p className="text-text-muted text-sm">Connect with me</p>
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                  </div>

                  <ul className="flex flex-wrap justify-center gap-3">
                    {socials_links.map((item, i) => (
                      <motion.li
                        key={i}
                        {...hoverScale}
                        custom={i}
                        variants={fadeUpVariant(0.2 + i * 0.05)}
                      >
                        <Link
                          href={item.val}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block group"
                        >
                          <span className="
                            relative flex items-center justify-center
                            w-12 h-12 md:w-14 md:h-14
                            rounded-2xl
                            bg-black/40
                            border border-primary/10
                            text-white text-xl md:text-2xl
                            group-hover:border-primary
                            group-hover:shadow-lg group-hover:shadow-primary/25
                            group-hover:-translate-y-1
                            transition-all duration-300
                            overflow-hidden
                          ">
                            <span className="relative z-10">{item.icon}</span>
                            <motion.div
                              className="absolute inset-0 bg-primary"
                              initial={{ y: "100%" }}
                              whileHover={{ y: 0 }}
                              transition={{ duration: 0.3 }}
                            />
                          </span>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Trust Badge */}
                <motion.div variants={fadeUpVariant(0.2)} className="text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 border border-primary/10">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-muted text-xs">Trusted by clients worldwide</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Decorative floating elements */}
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-10 w-16 h-16 bg-primary/10 rounded-2xl blur-xl pointer-events-none"
          />
          <motion.div
            animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-10 left-10 w-24 h-24 bg-accent-purple/10 rounded-full blur-xl pointer-events-none"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}

export default ProjectTogether;