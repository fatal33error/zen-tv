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
        'animated-gradient': 'linear-gradient(270deg, #00f2fe, #4facfe, #00f2fe)',
        'radial-glow': 'radial-gradient(circle at center, rgba(0,242,254,0.15) 0%, rgba(10,10,10,0) 70%)',
      },
      animation: {
        'infinite-scroll': 'scroll 40s linear infinite',
        'infinite-scroll-reverse': 'scroll-reverse 40s linear infinite',
        'shine': 'shine 3s linear infinite',
        'text-shimmer': 'text-shimmer 2.5s ease-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'spin-slow': 'spin 4s linear infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'gradient-x': 'gradient-x 6s ease infinite',
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
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'text-shimmer': {
          '0%, 100%': { backgroundPosition: '200% 0' },
          '50%': { backgroundPosition: '-200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 15px rgba(0,242,254,0.1)', borderColor: 'rgba(0,242,254,0.1)' },
          '50%': { boxShadow: '0 0 30px rgba(0,242,254,0.3)', borderColor: 'rgba(0,242,254,0.4)' },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
};
export default config;
