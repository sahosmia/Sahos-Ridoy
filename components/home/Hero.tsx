"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

// =========================
// Animation Config
// =========================
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
});

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const hoverScale = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.98 },
};

const floatAnimation = {
  animate: {
    y: [0, -20, 0],
    rotate: [0, 5, 0],
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
  },
};

const pulseAnimation = {
  animate: {
    scale: [1, 1.1, 1],
    opacity: [0.3, 0.6, 0.3],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

// =========================
// Data (Dynamic Ready)
// =========================
const heroData = {
  name: "Sahos Mia",
  role: "Creative Developer",
  subRole: "UI/UX Designer",
  location: "New York",
  description:
    "I craft exceptional digital experiences that blend beautiful aesthetics with powerful performance.",
};

// =========================
// Floating Shapes Components
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
      className="absolute top-20 left-10 w-16 h-16 opacity-20"
    >
      <div className="w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[52px] border-b-primary/30" />
    </motion.div>

    {/* Animated Square */}
    <motion.div
      animate={{
        y: [0, 25, 0],
        x: [0, -15, 0],
        rotate: [0, -360],
      }}
      transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      className="absolute bottom-32 right-20 w-12 h-12 opacity-20"
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
      className="absolute top-1/3 right-1/4 w-24 h-24"
    >
      <div className="w-full h-full border border-primary/20 rounded-full" />
    </motion.div>

    {/* Animated Star/Cross */}
    <motion.div
      animate={{
        rotate: [0, 180],
        scale: [1, 1.2, 1],
      }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 3 }}
      className="absolute bottom-1/4 left-1/5 w-8 h-8 opacity-30"
    >
      <div className="relative w-full h-full">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-primary/40 -translate-y-1/2" />
        <div className="absolute top-0 left-1/2 w-0.5 h-full bg-primary/40 -translate-x-1/2" />
      </div>
    </motion.div>

    {/* Floating Dots Cluster */}
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        animate={{
          y: [0, -40, 0],
          x: [0, Math.sin(i) * 30, 0],
          opacity: [0.1, 0.4, 0.1],
        }}
        transition={{
          duration: 4 + (i % 3),
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 0.3,
        }}
        className="absolute w-1.5 h-1.5 bg-primary/40 rounded-full"
        style={{
          top: `${10 + (i * 8)}%`,
          left: `${2 + (i * 12)}%`,
        }}
      />
    ))}

    {/* Right side floating dots */}
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={`right-${i}`}
        animate={{
          y: [0, -30, 0],
          x: [0, -20, 0],
          opacity: [0.1, 0.35, 0.1],
        }}
        transition={{
          duration: 5 + (i % 4),
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 0.4,
        }}
        className="absolute w-1 h-1 bg-accent-purple/40 rounded-full"
        style={{
          top: `${15 + (i * 10)}%`,
          right: `${5 + (i * 8)}%`,
        }}
      />
    ))}
  </div>
);

// =========================
// Components
// =========================

const HeroBadge = () => (
  <motion.div variants={fadeUp(0)} className="mb-6">
    <motion.span
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium backdrop-blur-sm"
    >
      <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
      Available for work
      <span className="w-1 h-1 bg-primary rounded-full animate-pulse" />
    </motion.span>
  </motion.div>
);

const HeroTitle = ({ data }) => (
  <>
    <motion.h4
      variants={fadeUp(0.1)}
      className="text-2xl md:text-3xl font-medium text-primary mb-2"
    >
      Hello, I am
    </motion.h4>

    <motion.h1
      variants={fadeUp(0.2)}
      className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
    >
      <span className="bg-gradient-to-r from-white via-primary-light to-primary bg-clip-text text-transparent">
        {data.name}
      </span>
    </motion.h1>

    <motion.div variants={fadeUp(0.3)} className="mb-6">
      <div className="inline-flex items-center gap-2 text-xl md:text-2xl text-text-secondary">
        <motion.span
          animate={{ rotate: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ✨
        </motion.span>
        <span>{data.role} &</span>
        <span className="text-primary font-semibold">{data.subRole}</span>
        <motion.span
          animate={{ rotate: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        >
          ✨
        </motion.span>
      </div>
    </motion.div>

    <motion.p
      variants={fadeUp(0.4)}
      className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
    >
      {data.description} Based in {data.location}.
    </motion.p>
  </>
);

const HeroStats = () => {
  const stats = useMemo(
    () => [
      { value: "5+", label: "Years Experience", icon: "⭐" },
      { value: "50+", label: "Projects Completed", icon: "🚀" },
      { value: "24/7", label: "Support", icon: "💬" },
    ],
    []
  );

  return (
    <motion.div
      variants={fadeUp(0.5)}
      className="flex justify-center gap-8 md:gap-12 mt-10 mb-8"
    >
      {stats.map((stat, idx) => (
        <motion.div
          key={idx}
          whileHover={{ y: -5 }}
          className="text-center group"
        >
          <div className="text-2xl mb-1 opacity-50 group-hover:opacity-100 transition-opacity">
            {stat.icon}
          </div>
          <div className="text-2xl md:text-3xl font-bold text-primary">
            {stat.value}
          </div>
          <div className="text-text-muted text-sm">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
};

const HeroCTA = () => (
  <motion.div
    variants={fadeUp(0.6)}
    className="flex gap-4 justify-center flex-wrap"
  >
    <motion.div {...hoverScale}>
      <Link
        href="/portfolios"
        aria-label="View Portfolio"
        className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white rounded-2xl font-bold overflow-hidden shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300"
      >
        <motion.div
          className="absolute inset-0 bg-white/20"
          initial={{ x: "-100%" }}
          whileHover={{ x: 0 }}
          transition={{ duration: 0.4 }}
        />
        <span className="relative z-10">View Portfolio</span>
        <svg
          className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </Link>
    </motion.div>

    <motion.div {...hoverScale}>
      <Link
        href="#about"
        aria-label="Learn More"
        className="inline-flex items-center gap-2 px-8 py-4 bg-surface-muted/80 backdrop-blur-sm border border-surface-border text-text-primary rounded-2xl font-bold hover:bg-surface-muted hover:border-primary/50 transition-all duration-300"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
        Learn More
      </Link>
    </motion.div>
  </motion.div>
);

// =========================
// Main Hero Component
// =========================

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { damping: 30, stiffness: 200 });
  const smoothY = useSpring(mouseY, { damping: 30, stiffness: 200 });

  useEffect(() => {
    setMounted(true);
    let rafId;

    const handleMouseMove = (e) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, [mouseX, mouseY]);

  const bgX = useTransform(smoothX, (v) => v * 0.02);
  const bgY = useTransform(smoothY, (v) => v * 0.02);

  if (!mounted) return null;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-surface">
      {/* Animated Background Gradient */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(254,78,89,0.15) 0%, transparent 70%)",
          x: bgX,
          y: bgY,
        }}
      />

      {/* Large Gradient Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]"
        animate={pulseAnimation.animate}
      />

      {/* Floating Shapes */}
      <FloatingShapes />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #fe4e59 1.5px, transparent 1.5px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Diagonal Lines Overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #fe4e59 0px, #fe4e59 1px, transparent 1px, transparent 40px)`,
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto text-center"
        >
          <HeroBadge />
          <HeroTitle data={heroData} />
          <HeroStats />
          <HeroCTA />

          {/* Animated Scroll Indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="relative">
              {/* Pulse ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-primary/50"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <div className="w-6 h-10 border-2 border-text-muted rounded-full flex justify-center relative z-10">
                <motion.div
                  className="w-1 h-2 bg-primary rounded-full mt-2"
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;