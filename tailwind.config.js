/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        xl: "90rem",  // 1440px (Custom breakpoint instead of default 1280px)
      },
      colors: {
        primary: '#1D4ED8',
        secondary: '#9333EA',
        accent: '#FBBF24',
        background: '#F9FAFB',
      },
    },
  },
  plugins: [],
};
