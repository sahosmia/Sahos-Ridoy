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
          light: "#ff7a81",
        },
        secondary: {
          DEFAULT: "#1d1831",
          light: "#2d264a",
          dark: "#141024",
        },
        accent: {
          orange: {
            DEFAULT: "#F75023",
            light: "#FEDFD7",
          },
          green: {
            DEFAULT: "#1CBE59",
            light: "#DDF5E6",
          },
          purple: {
            DEFAULT: "#836AF0",
            light: "#ECE8FD",
          },
        },
        surface: {
          DEFAULT: "#0A0A0A",
          muted: "#171717",
          border: "#262626",
        },
        text: {
          primary: "#111827",
          secondary: "#94a3b8", // slate-400
          muted: "#64748b",      // slate-500
        },
        dark: "#0A0A0A",
        "social-upwork": "#14A800",
        "social-upwork-dark": "#0F8A00",
        light: "#ffffff",
      },

      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.text.secondary"),
            h1: { color: theme("colors.text.primary") },
            h2: { color: theme("colors.text.primary") },
            h3: { color: theme("colors.text.primary") },
            h4: { color: theme("colors.text.primary") },
            strong: { color: theme("colors.text.primary") },
            a: {
              color: theme("colors.primary.DEFAULT"),
              "&:hover": {
                color: theme("colors.primary.dark"),
              },
            },
            code: { color: theme("colors.primary.light") },
          },
        },
      }),

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
