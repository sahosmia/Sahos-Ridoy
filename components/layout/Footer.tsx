"use client";

import React from 'react';
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaEnvelope
} from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { staggerContainer, fadeUpVariant, viewportConfig, hoverScale } from "@/lib/motion";

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaWhatsapp, href: "https://wa.me/8801952827301", label: "WhatsApp", color: "hover:bg-green-500" },
    { icon: FaLinkedin, href: "https://linkedin.com/in/sahosmia", label: "LinkedIn", color: "hover:bg-blue-700" },
    { icon: FaGithub, href: "https://github.com/sahosmia", label: "GitHub", color: "hover:bg-gray-700" },
    { icon: FaFacebookF, href: "https://facebook.com/sahosridoy", label: "Facebook", color: "hover:bg-blue-600" },
    { icon: FaYoutube, href: "https://youtube.com/@sahosmia", label: "YouTube", color: "hover:bg-red-600" },
    { icon: SiUpwork, href: "https://www.upwork.com/freelancers/~01e74a899688a44b8b", label: "Upwork", color: "hover:bg-social-upwork" },
    { icon: FaTwitter, href: "https://twitter.com/sahosmia", label: "Twitter", color: "hover:bg-black" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={viewportConfig}
      className="relative bg-surface border-t border-surface-border overflow-hidden"
    >
      {/* Animated background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 py-8 md:py-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6"
        >
          {/* Copyright Section */}
          <motion.div
            variants={fadeUpVariant(0)}
            className="text-center md:text-left"
          >
            <p className="text-text-secondary text-sm md:text-base">
              Designed & Developed by{" "}
              <span className="
                font-semibold text-text-primary 
                hover:text-primary 
                transition-colors duration-300 
                cursor-pointer
              ">
                Sahos Ridoy
              </span>
            </p>
            <p className="text-text-muted text-xs mt-1">
              © {currentYear} All rights reserved.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={fadeUpVariant(0.1)}
            className="flex flex-wrap items-center justify-center gap-2 md:gap-3"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                {...hoverScale}
                whileHover={{ y: -3 }}
                className={`
                  group relative
                  p-2.5 md:p-3
                  rounded-full
                  bg-surface-muted
                  border border-surface-border
                  text-text-secondary
                  ${social.color}
                  transition-all duration-300
                  hover:text-white
                  hover:border-transparent
                  focus:outline-none focus:ring-2 focus:ring-primary/50
                `}
              >
                <social.icon className="text-base md:text-lg" />

                {/* Tooltip on hover */}
                <span className="
                  absolute -top-8 left-1/2 -translate-x-1/2
                  px-2 py-1
                  bg-surface-muted text-text-primary text-xs
                  rounded-md
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                  whitespace-nowrap
                  pointer-events-none
                  border border-surface-border
                ">
                  {social.label}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 pt-6 border-t border-surface-border/50"
        >
          <p className="text-center text-text-muted text-xs">
            Built with{" "}
            <span className="text-primary">❤️</span>
            {" "}using Next.js, Tailwind CSS & Framer Motion
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;