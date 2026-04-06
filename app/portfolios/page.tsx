"use client";

import { motion } from "framer-motion";
import PageBannerTitle from "@/components/core/PageBannerTitle";
import { portfolios } from "@/data/portfolios";
import PortfolioItem from "@/components/PortfolioItem";
import { staggerContainer, fadeUpVariant, viewportConfig } from "@/lib/motion";

// মেটাডাটা ক্লায়েন্ট সাইডে কাজ করে না, তাই আলাদা ফাইলে রাখতে হবে
// export const metadata = { ... } // এটি separate layout.tsx বা page.tsx এ রাখুন

const Portfolios = () => {
  // শুধুমাত্র দেখানো পোর্টফোলিও ফিল্টার করুন
  const showPortfolios = portfolios.filter((item) => item.showStatus !== false);

  return (
    <>
      <PageBannerTitle
        title="My Portfolio"
        subtitle="Explore My Work"
        img="/images/portfolio/portfolio-background.jpg"
      />

      <section className="section bg-surface">
        <div className="container mx-auto px-4 md:px-6">
          {/* Filter Section (Optional) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            className="flex justify-center gap-3 mb-12 flex-wrap"
          >
            {["All", "Web Development", "UI/UX", "Mobile App"].map((filter, idx) => (
              <button
                key={idx}
                className="px-5 py-2 rounded-full bg-surface-muted border border-surface-border text-text-secondary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 text-sm font-medium"
              >
                {filter}
              </button>
            ))}
          </motion.div>

          {/* Portfolio Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {showPortfolios.map((item, index) => (
              <motion.div
                key={item.slug}
                variants={fadeUpVariant(index * 0.1)}
                className="h-full"
              >
                <PortfolioItem item={item} />
              </motion.div>
            ))}
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

export default Portfolios;