"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { menus } from "@/data/menus";
import Button from "../core/Button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { staggerContainer, fadeUpVariant } from "@/lib/motion";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Animation variants for mobile menu items
  const mobileMenuVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-surface/80 backdrop-blur-xl border-b border-surface-border py-2 shadow-lg"
            : "bg-transparent py-4"
        )}
      >
        <nav className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="group relative text-text-primary text-2xl font-bold tracking-tighter"
            >
              <span className="text-primary">S</span>Ridoy
              <span className="text-primary">.</span>

              {/* Animated underline on hover */}
              <span className="
                absolute -bottom-1 left-0 w-0 h-0.5 
                bg-gradient-to-r from-primary to-accent-purple
                group-hover:w-full transition-all duration-500
              " />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            <ul className="flex gap-8 items-center">
              {menus.map((item, index) => (
                <motion.li
                  key={item.title}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={item.link}
                    className={cn(
                      "relative font-medium text-sm transition-colors duration-300 group",
                      pathname === item.link
                        ? "text-primary"
                        : "text-text-secondary hover:text-primary"
                    )}
                  >
                    {item.title}

                    {/* Active indicator */}
                    {pathname === item.link && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}

                    {/* Hover underline */}
                    <span className="
                      absolute -bottom-1 left-0 w-0 h-0.5 
                      bg-primary/50
                      group-hover:w-full transition-all duration-300
                    " />
                  </Link>
                </motion.li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <Button href="/contact" size="sm">
                Hire Me
              </Button>
            </motion.div>
          </div>

          {/* Mobile Toggle Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="md:hidden text-text-primary p-2 rounded-lg hover:bg-surface-muted transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </nav>

        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent-purple origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: scrolled ? 1 : 0 }}
          transition={{ duration: 0.1 }}
        />
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="
                fixed right-0 top-0 bottom-0 w-full max-w-sm 
                bg-surface/95 backdrop-blur-xl 
                border-l border-surface-border
                z-40 md:hidden
                shadow-2xl
              "
            >
              <div className="flex flex-col h-full pt-20 px-6">
                <motion.ul
                  variants={mobileMenuVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-col gap-6"
                >
                  {menus.map((item) => (
                    <motion.li
                      key={item.title}
                      variants={mobileItemVariants}
                      className="text-center"
                    >
                      <Link
                        href={item.link}
                        className={cn(
                          "text-2xl font-semibold transition-all duration-300 inline-block relative",
                          pathname === item.link
                            ? "text-primary"
                            : "text-text-secondary hover:text-primary"
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                        {pathname === item.link && (
                          <motion.div
                            layoutId="mobileActiveNav"
                            className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary rounded-full"
                            transition={{ type: "spring", stiffness: 380 }}
                          />
                        )}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>

                <motion.div
                  variants={mobileItemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.4 }}
                  className="mt-10 text-center"
                >
                  <Button href="/contact" size="lg" className="w-full">
                    Hire Me
                  </Button>
                </motion.div>

                {/* Social links in mobile menu */}
                <motion.div
                  variants={mobileItemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.5 }}
                  className="mt-auto pb-8 text-center"
                >
                  <p className="text-text-muted text-sm mb-4">Connect with me</p>
                  <div className="flex justify-center gap-4">
                    <a href="https://github.com/sahosmia" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors">
                      GitHub
                    </a>
                    <a href="https://linkedin.com/in/sahosmia" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors">
                      LinkedIn
                    </a>
                    <a href="https://twitter.com/sahosmia" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors">
                      Twitter
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;