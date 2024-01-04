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
        light: "#ffffff",
        main: "#FD562A",
      },

      backgroundImage: {
        "hero-pattern": "url('/images/hero.jpg')",
        "project-together": "url('/img/bg-1.jpg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
    },
    screens: {
      sm: "640px", // => @media (min-width: 640px) { ... }
      md: "768px", // => @media (min-width: 768px) { ... }
      lg: "1024px", // => @media (min-width: 1024px) { ... }
      xl: "1124px", // => @media (min-width: 1280px) { ... }
      "2xl": "1480px", // => @media (min-width: 1280px) { ... }
    },

    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [],
};
