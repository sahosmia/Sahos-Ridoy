"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

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
      staggerChildren: 0.12,
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
// Data (English)
// =========================
const notFoundData = {
  title: "Looks like you're lost?",
  description: "The page you're looking for doesn't exist or has been moved.",
  homeText: "Back to Homepage",
  portfolioText: "View Portfolio",
  helpText: "Having trouble?",
  contactText: "Get in touch with me",
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

    {/* Animated Plus Sign */}
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
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        animate={{
          y: [0, -40, 0],
          x: [0, Math.sin(i) * 30, 0],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 4 + i,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 0.5,
        }}
        className="absolute w-1.5 h-1.5 bg-primary/40 rounded-full"
        style={{
          top: `${15 + i * 12}%`,
          left: `${5 + i * 15}%`,
        }}
      />
    ))}
  </div>
);

// =========================
// Background Component
// =========================
const Background = ({ moveX, moveY }) => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Large Gradient Orbs */}
    <motion.div
      style={{ x: moveX, y: moveY }}
      animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
      transition={{ duration: 10, repeat: Infinity }}
      className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"
    />

    <motion.div
      style={{ x: moveY, y: moveX }}
      animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.3, 0.1] }}
      transition={{ duration: 12, repeat: Infinity, delay: 1 }}
      className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-accent-purple/20 rounded-full blur-[120px]"
    />

    {/* Center Glow */}
    <motion.div
      animate={pulseAnimation.animate}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]"
    />
  </div>
);

// =========================
// Grid Overlay
// =========================
const GridOverlay = () => (
  <>
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
  </>
);

// =========================
// Error Code Component with Animation
// =========================
const ErrorCode = () => (
  <motion.div variants={fadeUp(0.1)} className="relative inline-block mb-8">
    {/* Animated Ring Around 404 */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute -inset-8 rounded-full border border-primary/20"
    />
    <motion.div
      animate={{ rotate: -360 }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      className="absolute -inset-12 rounded-full border border-accent-purple/10"
    />

    <motion.h1
      className="text-[120px] md:text-[200px] font-black tracking-tighter leading-none select-none relative"
      animate={{
        textShadow: [
          "0 0 20px rgba(254,78,89,0)",
          "0 0 40px rgba(254,78,89,0.4)",
          "0 0 20px rgba(254,78,89,0)",
        ],
        scale: [1, 1.02, 1],
      }}
      transition={{ duration: 3, repeat: Infinity }}
    >
      <span className="text-text-primary">4</span>
      <span className="bg-gradient-to-br from-primary via-accent-purple to-primary bg-clip-text text-transparent italic inline-block animate-pulse">
        0
      </span>
      <span className="text-text-primary">4</span>
    </motion.h1>

    {/* Floating Orbs Around 404 */}
    <motion.div
      animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -top-6 -right-8 w-3 h-3 bg-primary rounded-full blur-sm"
    />
    <motion.div
      animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      className="absolute -bottom-6 -left-8 w-2 h-2 bg-accent-purple rounded-full blur-sm"
    />
  </motion.div>
);

// =========================
// Error Text Component
// =========================
const ErrorText = ({ data }) => (
  <motion.div variants={fadeUp(0.2)} className="space-y-4 mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
      {data.title}
    </h2>
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "96px" }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="h-1.5 bg-gradient-to-r from-primary to-accent-purple rounded-full mx-auto"
    />
    <p className="text-text-secondary text-lg md:text-xl max-w-lg mx-auto leading-relaxed">
      {data.description}
    </p>
  </motion.div>
);

// =========================
// Actions Component
// =========================
const Actions = ({ data }) => (
  <motion.div
    variants={fadeUp(0.3)}
    className="flex flex-col sm:flex-row gap-5 justify-center items-center"
  >
    <motion.div {...hoverScale}>
      <Link
        href="/"
        aria-label="Go Home"
        className="group relative flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-primary to-primary-dark text-white rounded-2xl font-bold shadow-lg shadow-primary/30 overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 bg-white/20"
          initial={{ x: "-100%" }}
          whileHover={{ x: 0 }}
          transition={{ duration: 0.4 }}
        />
        <svg
          className="w-5 h-5 relative z-10 group-hover:-translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        <span className="relative z-10">{data.homeText}</span>
      </Link>
    </motion.div>

    <motion.div {...hoverScale}>
      <Link
        href="/portfolios"
        aria-label="View Portfolio"
        className="flex items-center gap-3 px-10 py-4 bg-surface-muted/80 backdrop-blur-sm border border-surface-border text-text-primary rounded-2xl font-bold hover:bg-surface-muted hover:border-primary/50 transition-all duration-300"
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
            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
          />
        </svg>
        <span>{data.portfolioText}</span>
      </Link>
    </motion.div>
  </motion.div>
);

// =========================
// Main Component
// =========================
const NotFoundClient = () => {
  const [mounted, setMounted] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const moveX = useTransform(springX, [0, 1000], [-20, 20]);
  const moveY = useTransform(springY, [0, 1000], [-20, 20]);

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

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-surface">
      <Background moveX={moveX} moveY={moveY} />
      <FloatingShapes />
      <GridOverlay />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="max-w-3xl mx-auto text-center"
        >
          <ErrorCode />
          <ErrorText data={notFoundData} />
          <Actions data={notFoundData} />

          <motion.div
            variants={fadeUp(0.4)}
            className="mt-16 pt-8 border-t border-surface-border/50"
          >
            <p className="text-text-muted">
              {notFoundData.helpText}{" "}
              <Link
                href="/contact"
                className="text-primary font-medium hover:underline inline-flex items-center gap-1 group"
              >
                {notFoundData.contactText}
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFoundClient;