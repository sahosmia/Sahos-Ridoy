"use client";
import { useState, useEffect } from "react";
import dynamic from 'next/dynamic';

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SectionHead from "./SectionHead";
import { portfolios } from "@/data/portfolios";
import { viewportConfig } from "@/lib/motion";

// Dynamically import components that use browser APIs
const PortfolioItem = dynamic(() => import('../PortfolioItem'), {
  ssr: false,
  loading: () => <div className="h-96 bg-surface-muted rounded-3xl animate-pulse" />
});

function MyWork() {
  const showPortfolios = portfolios.filter((item) => item.showStatus);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredNav, setHoveredNav] = useState(null);

  // Number of items to show at once
  const itemsToShow = 3;
  const maxIndex = Math.max(0, showPortfolios.length - itemsToShow);

  // Get current visible items
  const getVisibleItems = () => {
    return showPortfolios.slice(currentIndex, currentIndex + itemsToShow);
  };

  const nextSlide = () => {
    if (currentIndex + itemsToShow < showPortfolios.length) {
      setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  const visibleItems = getVisibleItems();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={viewportConfig}
      className="section relative overflow-hidden bg-surface"
      id="portfolio"
    >
      {/* ========== Premium Background Effects ========== */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent-purple/5" />

        {/* Animated Orb 1 */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />

        {/* Animated Orb 2 */}
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.35, 0.15],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-40 -left-20 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl"
        />

        {/* Animated Orb 3 - Center */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
        />

        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #fe4e59 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <SectionHead title="My Work" des="I try to satisfy client by my work" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Carousel Container */}
        <div className="relative">
          {/* Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {visibleItems.map((item, idx) => (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="h-full"
              >
                <PortfolioItem item={item} />
              </motion.div>
            ))}
          </div>

          {/* ========== Premium Navigation Buttons ========== */}
          {showPortfolios.length > itemsToShow && (
            <>
              {/* Previous Button */}
              <motion.button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                onHoverStart={() => setHoveredNav('prev')}
                onHoverEnd={() => setHoveredNav(null)}
                className="
                  absolute left-0 top-1/2 -translate-y-1/2 
                  -translate-x-5 md:-translate-x-7
                  w-12 h-12 rounded-full 
                  bg-surface-muted/80 backdrop-blur-sm
                  border border-surface-border 
                  text-text-primary 
                  hover:bg-primary hover:text-white hover:border-primary
                  transition-all duration-300 
                  flex items-center justify-center
                  disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-surface-muted/80
                  z-10
                  shadow-lg
                "
                aria-label="Previous projects"
              >
                <motion.svg
                  className="w-5 h-5"
                  animate={{ x: hoveredNav === 'prev' ? -3 : 0 }}
                  transition={{ duration: 0.2 }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </motion.svg>
              </motion.button>

              {/* Next Button */}
              <motion.button
                onClick={nextSlide}
                disabled={currentIndex + itemsToShow >= showPortfolios.length}
                onHoverStart={() => setHoveredNav('next')}
                onHoverEnd={() => setHoveredNav(null)}
                className="
                  absolute right-0 top-1/2 -translate-y-1/2 
                  translate-x-5 md:translate-x-7
                  w-12 h-12 rounded-full 
                  bg-surface-muted/80 backdrop-blur-sm
                  border border-surface-border 
                  text-text-primary 
                  hover:bg-primary hover:text-white hover:border-primary
                  transition-all duration-300 
                  flex items-center justify-center
                  disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-surface-muted/80
                  z-10
                  shadow-lg
                "
                aria-label="Next projects"
              >
                <motion.svg
                  className="w-5 h-5"
                  animate={{ x: hoveredNav === 'next' ? 3 : 0 }}
                  transition={{ duration: 0.2 }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </motion.svg>
              </motion.button>
            </>
          )}

          {/* ========== Premium Dot Indicators ========== */}
          {showPortfolios.length > itemsToShow && (
            <div className="flex justify-center items-center gap-3 mt-12">
              {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className="group relative"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Go to slide ${idx + 1}`}
                >
                  <motion.div
                    className={`
                      rounded-full transition-all duration-300
                      ${idx === currentIndex
                        ? 'w-8 h-2 bg-primary'
                        : 'w-2 h-2 bg-surface-border group-hover:bg-primary/50'
                      }
                    `}
                    animate={{
                      scale: idx === currentIndex ? 1 : 0.8
                    }}
                  />
                  {/* Tooltip */}
                  {idx !== currentIndex && (
                    <span className="
                      absolute -top-8 left-1/2 -translate-x-1/2
                      px-2 py-1 rounded-md
                      bg-surface-muted text-text-muted text-xs
                      opacity-0 group-hover:opacity-100
                      transition-opacity duration-300
                      whitespace-nowrap
                      pointer-events-none
                      border border-surface-border
                    ">
                      {idx + 1}
                    </span>
                  )}
                </motion.button>
              ))}

              {/* Counter Indicator */}
              <span className="ml-4 text-text-muted text-sm">
                {currentIndex + 1} / {maxIndex + 1}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* ========== Decorative Shape ========== */}
      <motion.div
        initial={{ x: -60, opacity: 0, rotate: -10 }}
        whileInView={{ x: 0, opacity: 0.4, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="absolute bottom-5 left-2 w-16 md:w-28 pointer-events-none hover:opacity-100 transition-opacity duration-500 z-0"
      >
        <Image
          src="/images/shape.png"
          alt="Decorative shape"
          width={100}
          height={100}
          className="w-full h-auto animate-float"
        />
      </motion.div>

      {/* Right Side Decorative Element */}
      <motion.div
        initial={{ x: 60, opacity: 0, rotate: 10 }}
        whileInView={{ x: 0, opacity: 0.3, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="absolute top-20 right-5 w-20 h-20 pointer-events-none hidden lg:block"
      >
        <div className="w-full h-full border-2 border-primary/20 rounded-2xl rotate-12" />
      </motion.div>
    </motion.section>
  );
}

export default MyWork;
