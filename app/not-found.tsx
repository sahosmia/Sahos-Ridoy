// components/NotFoundClient.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, fadeUpVariant, hoverScale } from "@/lib/motion";

const NotFoundClient = () => {
  return (
    <>
      {/* Animated Background */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-surface">
        {/* Animated Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute -top-40 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, delay: 2 }}
            className="absolute -bottom-40 -left-20 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 6, repeat: Infinity, delay: 4 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
          />
        </div>

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #fe4e59 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="max-w-2xl mx-auto text-center"
          >
            {/* 404 Number with Animation */}
            <motion.div variants={fadeUpVariant(0)} className="relative mb-8">
              <motion.h1
                className="text-8xl md:text-9xl lg:text-[200px] font-bold leading-none"
                animate={{
                  scale: [1, 1.05, 1],
                  textShadow: [
                    "0 0 0px rgba(254,78,89,0)",
                    "0 0 20px rgba(254,78,89,0.5)",
                    "0 0 0px rgba(254,78,89,0)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-text-primary">4</span>
                <span className="bg-gradient-to-r from-primary via-accent-purple to-primary bg-clip-text text-transparent">
                  0
                </span>
                <span className="text-text-primary">4</span>
              </motion.h1>

              {/* Decorative elements around 404 */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-10 -right-10 w-20 h-20 border-2 border-primary/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-10 -left-10 w-16 h-16 border-2 border-accent-purple/20 rounded-full"
              />
            </motion.div>

            {/* Error Message */}
            <motion.div variants={fadeUpVariant(0.1)} className="space-y-4 mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary">
                Oops! Page Not Found
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent-purple rounded-full mx-auto" />
              <p className="text-text-secondary text-lg max-w-md mx-auto">
                The page you&apos;re looking for doesn&apos;t exist or has been moved.
              </p>
            </motion.div>

            {/* Animated Illustration (Optional) */}
            <motion.div
              variants={fadeUpVariant(0.2)}
              className="mb-10 flex justify-center"
            >
              <div className="relative w-48 h-48">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <svg className="w-32 h-32 text-primary/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </motion.div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full blur-sm"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent-purple/20 rounded-full blur-sm"
                />
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              variants={fadeUpVariant(0.3)}
              className="flex flex-wrap gap-4 justify-center"
            >
              <motion.div {...hoverScale}>
                <Link
                  href="/"
                  className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary-dark rounded-xl font-semibold text-white overflow-hidden shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300"
                >
                  <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  <span>Go to Homepage</span>
                </Link>
              </motion.div>

              <motion.div {...hoverScale}>
                <Link
                  href="/portfolios"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-surface-muted border border-surface-border rounded-xl font-semibold text-text-primary hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                  View Portfolio
                </Link>
              </motion.div>
            </motion.div>

            {/* Help Text */}
            <motion.div
              variants={fadeUpVariant(0.4)}
              className="mt-12 pt-8 border-t border-surface-border"
            >
              <p className="text-text-muted text-sm">
                Need help? <Link href="/contact" className="text-primary hover:underline">Contact me</Link> directly.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default NotFoundClient;