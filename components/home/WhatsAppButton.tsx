"use client";

import React, { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  const phoneNumber = '8801952827301';
  const message = 'Hello! I found your portfolio and want to chat.';
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-green-600 shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300"
    >
      <FaWhatsapp className="text-white text-2xl" />
    </motion.a>
  );
};

export default WhatsAppButton;