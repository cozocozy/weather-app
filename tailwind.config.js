/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,jsx}",
      "./pages/**/*.{js,jsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ["var(--font-montserrat)", "sans-serif"],
          mono: ["var(--font-raleway)", "sans-serif"],
        },
      },
    },
  };
  