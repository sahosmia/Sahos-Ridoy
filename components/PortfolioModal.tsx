// components/PortfolioModal.tsx
"use client";

import { MouseEvent, ReactNode, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PortfolioModalProps {
  handleQuickViewClose: (e: MouseEvent<HTMLDivElement> | MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  title?: string;
}

const PortfolioModal: React.FC<PortfolioModalProps> = ({
  handleQuickViewClose,
  children,
  title = "Project Details",
}) => {
  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  // ESC key handler
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleQuickViewClose(e as any);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [handleQuickViewClose]);

  return (
    <AnimatePresence>
      <motion.div
        id="modal-backdrop" // ব্যাকড্রপ আইডি
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={handleQuickViewClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden"
        >
          {/* Modal Container */}
          <div className="relative rounded-2xl bg-surface border border-surface-border shadow-2xl overflow-hidden">

            {/* Header */}
            <div className="flex items-center justify-between p-4 md:p-6 border-b border-surface-border bg-surface-muted/50">
              <div className="flex items-center gap-3">
                <div className="w-1 h-6 bg-primary rounded-full" />
                <h2 className="text-lg md:text-xl font-semibold text-text-primary">
                  {title}
                </h2>
              </div>

              <motion.button
                onClick={handleQuickViewClose}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="w-8 h-8 rounded-full flex items-center justify-center bg-surface-muted border border-surface-border text-text-muted hover:bg-primary/20 hover:text-primary hover:border-primary/50 transition-all duration-300"
                aria-label="Close modal"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            </div>

            {/* Content */}
            <div className="p-4 md:p-6 overflow-y-auto max-h-[calc(90vh-80px)] custom-scrollbar">
              {children}
            </div>

            {/* Footer */}
            <div className="flex justify-end gap-3 p-4 md:p-6 border-t border-surface-border bg-surface-muted/30">
              <motion.button
                onClick={handleQuickViewClose}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-4 py-2 rounded-lg border border-surface-border text-text-secondary hover:bg-surface-muted hover:border-primary/50 transition-all duration-300"
              >
                Close
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PortfolioModal;