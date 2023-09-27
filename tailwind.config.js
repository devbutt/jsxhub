/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    colors: {
      current: "currentColor",
      transparent: "transparent",
      white: "#FFFFFF",
      black: "#1e293b",
      dark: "#0f172a",
      primary: "#64748b",
      yellow: "#FBB040",
      slate: {
        100: "#f1f5f9",
        200: "#e2e8f0",
        300: "#cbd5e1",
      },
      "body-color": "#6d7282",
    },

    theme: {
      extend: {
        // backgroundImage: {
        //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        //   "gradient-conic":
        //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        // },
      },
    },
  },
  plugins: [],
};
