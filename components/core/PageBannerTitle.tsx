"use client";

import { motion } from "framer-motion";
import { viewportConfig } from "@/lib/motion";

function PageBannerTitle({ title, img, subtitle }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={viewportConfig}
      className="relative min-h-[50vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: img ? `url(${img})` : "url('/images/page-banner-default.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark Overlay - সঠিকভাবে ফিক্স করা */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/90" />

      {/* Animated Gradient Overlay */}
      <motion.div
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent-purple/10"
      />

      {/* Animated Orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute -top-40 -right-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], x: [0, -50, 0] }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        className="absolute -bottom-40 -left-20 w-80 h-80 bg-accent-purple/20 rounded-full blur-3xl"
      />

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Subtitle / Breadcrumb */}
          {subtitle && (
            <span className="inline-block text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              {subtitle}
            </span>
          )}

          {/* Title with Gradient */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
            <span className="bg-gradient-to-r from-white via-primary-light to-primary bg-clip-text text-transparent">
              {title}
            </span>
          </h1>

          {/* Animated Underline */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-primary to-accent-purple rounded-full mx-auto mt-6"
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-text-muted rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-primary rounded-full mt-2"
          />
        </div>
      </motion.div>
    </motion.section>
  );
}

export default PageBannerTitle;