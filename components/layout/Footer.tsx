import React from 'react';
import {
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaFacebookF,
  FaYoutube,
  // FaUpwork,
  FaTwitter
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm md:text-base">
            Designed & Developed by <span className="font-semibold text-white hover:text-green-500 transition-colors duration-300 cursor-pointer">Sahos Ridoy</span>
          </p>
          <p className="text-xs text-gray-400 mt-1">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>

        <div className="flex space-x-4">
          {/* WhatsApp */}
          <a
            href="https://wa.me/8801952827301"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-green-500 hover:bg-green-600 transition-colors duration-300 text-white text-lg"
          >
            <FaWhatsapp />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/sahosmia"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-blue-700 hover:bg-blue-800 transition-colors duration-300 text-white text-lg"
          >
            <FaLinkedin />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/sahosmia"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300 text-white text-lg"
          >
            <FaGithub />
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com/sahosridoy"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors duration-300 text-white text-lg"
          >
            <FaFacebookF />
          </a>

          {/* YouTube */}
          <a
            href="https://youtube.com/@sahosmia"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-red-600 hover:bg-red-700 transition-colors duration-300 text-white text-lg"
          >
            <FaYoutube />
          </a>

          {/* Upwork */}
          {/* <a
            href="https://www.upwork.com/freelancers/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-[#14A800] hover:bg-[#0F8A00] transition-colors duration-300 text-white text-lg"
          >
            <FaUpwork />
          </a> */}

          {/* Twitter / X */}
          <a
            href="https://twitter.com/sahosmia"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-black hover:bg-gray-900 transition-colors duration-300 text-white text-lg"
          >
            <FaTwitter />
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
