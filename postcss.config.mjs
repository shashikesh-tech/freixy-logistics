const config = {
  theme: {
    extend: {
      fontFamily: {
        outfit: "var(--font-outfit)",
        poppins: "var(--font-poppins)",
      },
      colors: {
        primary: "#d53503",
        secondary: "#001d30",
        default: "#ffffff",
      },
    },
  },
  plugins: ["@tailwindcss/postcss"],
};

export default config;
