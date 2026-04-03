/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#fe4e59",
          dark: "#e33e48",
        },
        secondary: "#1d1831",
        accent: {
          orange: "#F75023",
          "orange-light": "#FEDFD7",
          green: "#1CBE59",
          "green-light": "#DDF5E6",
          purple: "#836AF0",
          "purple-light": "#ECE8FD",
        },
        dark: "#0A0A0A",
        "social-upwork": "#14A800",
        "social-upwork-dark": "#0F8A00",
        light: "#ffffff",
      },

      backgroundImage: {
        "hero-pattern": "url('/images/hero.jpg')",
        "project-together": "url('/images/bg-1.jpg')",
        "page-banner": "url('/images/portfolio/portfolio-background.jpg')",
      },
    },
    screens: {
      sm: "640px", 
      md: "768px", 
      lg: "1024px", 
      xl: "1124px", 
      "2xl": "1280px", 
    },

    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [],
};
