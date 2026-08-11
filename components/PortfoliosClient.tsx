"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageBannerTitle from "@/components/core/PageBannerTitle";
import { portfolios } from "@/data/portfolios";
import PortfolioItem from "@/components/PortfolioItem";
import { staggerContainer, viewportConfig } from "@/lib/motion";

const PortfoliosClient = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  // Filter portfolios to be shown
  const showPortfolios = portfolios.filter(
    (item) =>
      item.showStatus !== false &&
      (selectedFilter === "All" || item.category === selectedFilter)
  );

  return (
    <>
      <PageBannerTitle
        title="My Portfolio"
        subtitle="Explore My Work"
        img="/images/portfolio/portfolio-background.jpg"
      />

      <section className="section bg-surface">
        <div className="container mx-auto px-4 md:px-6">
          {/* Filter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            className="flex justify-center gap-3 mb-12 flex-wrap"
          >
            {["All", "Web Development", "UI/UX", "Mobile App"].map((filter, idx) => {
              const isActive = selectedFilter === filter;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-5 py-2 rounded-full border transition-all duration-300 text-sm font-medium ${
                    isActive
                      ? "bg-primary text-white border-primary shadow-lg shadow-primary/25"
                      : "bg-surface-muted border-surface-border text-text-secondary hover:bg-primary hover:text-white hover:border-primary"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </motion.div>

          {/* Portfolio Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {showPortfolios.map((item) => (
                <motion.div
                  key={item.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <PortfolioItem item={item} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {showPortfolios.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">📁</div>
              <h3 className="text-xl font-semibold text-text-primary mb-2">No Projects Yet</h3>
              <p className="text-text-secondary">Check back soon for new projects!</p>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
};

export default PortfoliosClient;
