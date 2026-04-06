"use client";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import { fadeUpVariant, staggerContainer, hoverScale, viewportConfig } from "@/lib/motion";

const Hero = () => {
  // Mouse follow effect for background
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const backgroundX = useTransform(smoothX, (value) => value * 0.02);
  const backgroundY = useTransform(smoothY, (value) => value * 0.02);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-surface">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(254,78,89,0.15) 0%, transparent 70%)",
          x: backgroundX,
          y: backgroundY,
        }}
      />

      {/* Floating elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div variants={fadeUpVariant(0)} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium backdrop-blur-sm">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Available for work
            </span>
          </motion.div>

          {/* Animated greeting */}
          <motion.h4 variants={fadeUpVariant(0.1)} className="text-2xl md:text-3xl font-medium text-primary mb-2">
            Hello, I am
          </motion.h4>

          {/* Name with gradient */}
          <motion.h1 variants={fadeUpVariant(0.2)} className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-primary-light to-primary bg-clip-text text-transparent">
              Sahos Mia
            </span>
          </motion.h1>

          {/* Animated role text */}
          <motion.div variants={fadeUpVariant(0.3)} className="mb-6">
            <div className="inline-flex items-center gap-2 text-xl md:text-2xl text-text-secondary">
              <span>✨</span>
              <span>Creative Developer &</span>
              <span className="text-primary font-semibold">UI/UX Designer</span>
              <span>✨</span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeUpVariant(0.4)}
            className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            I craft exceptional digital experiences that blend beautiful aesthetics
            with powerful performance. Based in New York, passionate about building
            the future of the web.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={fadeUpVariant(0.5)}
            className="flex justify-center gap-8 md:gap-12 mt-10 mb-8"
          >
            {[
              { value: "5+", label: "Years Experience" },
              { value: "50+", label: "Projects Completed" },
              { value: "24/7", label: "Support" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-text-muted text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUpVariant(0.6)}
            className="flex gap-4 justify-center flex-wrap"
          >
            <motion.div {...hoverScale}>
              <Link href="/portfolios" className="btn btn-primary group">
                View Portfolio
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </motion.div>

            <motion.div {...hoverScale}>
              <Link href="#about" className="btn btn-outline">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                Learn More
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-text-muted rounded-full flex justify-center">
              <div className="w-1 h-2 bg-primary rounded-full mt-2 animate-bounce" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;