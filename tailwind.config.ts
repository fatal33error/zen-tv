import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: "#00f2fe",
          purple: "#4facfe",
          dark: "#0a0a0a",
        },
      },
      fontFamily: {
        heading: ['var(--font-cal-sans)', 'Poppins', "sans-serif"],
        body: ['Inter', 'Geist', "sans-serif"],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(to right, #00f2fe, #4facfe)',
        'radial-glow': 'radial-gradient(circle at center, rgba(0,242,254,0.15) 0%, rgba(10,10,10,0) 70%)',
      },
      animation: {
        'infinite-scroll': 'scroll 40s linear infinite',
        'infinite-scroll-reverse': 'scroll-reverse 40s linear infinite',
        'shine': 'shine 3s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'spin-slow': 'spin 4s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'scroll-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        shine: {
          from: { backgroundPosition: '200% center' },
          to: { backgroundPosition: '-200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
};
export default config;
