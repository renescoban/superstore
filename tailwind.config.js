/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        16: "repeat(16, minmax(0, 1fr))",
      },
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        Lato: ["Lato", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        Shippori: "Shippori Antique B1",
        Reggae: "Reggae One",
        Shrikhand: ["Shrikhand", "sans-serif"],
      },
      colors: {
        "primary-orange": "#FF5722",
      },
      screens: {
        mlg: "926px",
      },
    },
  },
  plugins: [],
};
