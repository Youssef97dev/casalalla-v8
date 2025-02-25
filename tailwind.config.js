/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        carte_btn: "var(--carte-btn)",
        book_btn: "var(--book-btn-1)",
        book_btn_hover: "var(--book-btn-2)",
        text_color: "var(--text-color)",
        casa_bg: "var(--bg-color)",
      },
      fontFamily: {
        galdeano: ["Galdeano", "serif"],
      },
    },
  },
  plugins: [],
};
