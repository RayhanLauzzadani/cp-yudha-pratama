/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    screens: {
      'sm': '640px',   // Small devices
      'md': '768px',   // Medium devices  
      'lg': '992px',   // Large devices (Desktop starts here)
      'xl': '1280px',  // Extra large
      '2xl': '1536px', // 2X Extra large
    },
    extend: {
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
