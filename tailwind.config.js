/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
          glow: "rgba(254,78,89,0.2)",
        },
        secondary: {
          DEFAULT: "#1d1831",
          light: "#2d264a",
          dark: "#141024",
        },
        accent: {
          orange: { DEFAULT: "#F75023", light: "#FEDFD7" },
          green: { DEFAULT: "#1CBE59", light: "#DDF5E6" },
          purple: { DEFAULT: "#836AF0", light: "#ECE8FD" },
        },
        surface: {
          DEFAULT: "#0A0A0A",
          muted: "#171717",
          elevated: "#1F1F1F",
          border: "#262626",
          glass: "rgba(255,255,255,0.03)",
        },
        text: {
          primary: "#FFFFFF",      // Fixed: white for dark theme
          secondary: "#A1A1AA",    // zinc-400
          muted: "#71717A",         // zinc-500
          accent: "#fe4e59",
        },
      },

      // 📐 NEW: Spacing scale for consistency
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },

      // 🎯 NEW: Animation delays and durations
      transitionDelay: {
        '0': '0ms',
        '250': '250ms',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },

      // 🔲 NEW: Custom border radius options
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },

      // 📝 NEW: Fluid typography
      fontSize: {
        'fluid-xl': 'clamp(1.5rem, 5vw, 2rem)',
        'fluid-2xl': 'clamp(2rem, 6vw, 2.5rem)',
        'fluid-3xl': 'clamp(2.5rem, 7vw, 3.5rem)',
        'fluid-4xl': 'clamp(3rem, 8vw, 4.5rem)',
      },

      backgroundImage: {
        "hero-pattern": "url('/images/hero.jpg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "glass-gradient": "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)",
      },

      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(254,78,89,0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(254,78,89,0.6)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1124px',
      '2xl': '1280px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
      },
    },
  },
  plugins: [],
};