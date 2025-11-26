import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = '8801952827301'; // Replace with your number
  const message = 'Hello! I found your website and want to chat.';

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-green-500 shadow-lg hover:bg-green-600 transition-colors duration-300 animate-pulse"
    >
      <FaWhatsapp className="text-white text-2xl" />
    </a>
  );
};

export default WhatsAppButton;
