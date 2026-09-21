"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PageBannerTitle from "@/components/core/PageBannerTitle";
import {
  portfolios,
  portfolioCategories,
  getPortfolioCategory,
  PortfolioCategory,
} from "@/data/portfolios";
import PortfolioItem from "@/components/PortfolioItem";
import { staggerContainer, fadeUpVariant, viewportConfig } from "@/lib/motion";

type Filter = "All" | PortfolioCategory;

const filters: Filter[] = ["All", ...portfolioCategories];

const Portfolios = () => {
  const [active, setActive] = useState<Filter>("All");

  const showPortfolios = portfolios.filter((item) => item.showStatus !== false);
  const filtered =
    active === "All"
      ? showPortfolios
      : showPortfolios.filter((item) => getPortfolioCategory(item) === active);

  const countFor = (filter: Filter) =>
    filter === "All"
      ? showPortfolios.length
      : showPortfolios.filter((item) => getPortfolioCategory(item) === filter)
          .length;

  return (
    <>
      <PageBannerTitle
        title="My Portfolio"
        subtitle="Explore My Work"
        img="/images/portfolio/portfolio-background.jpg"
      />

      <section className="section bg-surface">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            className="flex justify-center gap-3 mb-12 flex-wrap"
            role="tablist"
            aria-label="Filter projects"
          >
            {filters.map((filter) => {
              const isActive = filter === active;
              return (
                <button
                  key={filter}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(filter)}
                  className={`px-5 py-2 rounded-full border text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-primary border-primary text-white"
                      : "bg-surface-muted border-surface-border text-text-secondary hover:bg-primary hover:text-white hover:border-primary"
                  }`}
                >
                  {filter}
                  <span className="ml-2 opacity-70">{countFor(filter)}</span>
                </button>
              );
            })}
          </motion.div>

          <motion.div
            key={active}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {filtered.map((item, index) => (
              <motion.div
                key={item.slug}
                variants={fadeUpVariant(index * 0.05)}
                className="h-full"
              >
                <PortfolioItem item={item} />
              </motion.div>
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                No projects in this category yet
              </h3>
              <p className="text-text-secondary">Check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Portfolios;
