import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // poppins:'var(--font-poppins)',
        inter: "var(--font-inter)",
        roboto: "var(--font-roboto)",
      },
      colors: {
        grey: {
          DEFAULT: "rgb(var(--background) / <alpha-value>)",

          50: "rgb(var(--app-gray-50) / <alpha-value>)",
          100: "rgb(var(--app-gray-100) / <alpha-value>)",
          200: "rgb(var(--app-gray-200) / <alpha-value>)",
          300: "rgb(var(--app-gray-300) / <alpha-value>)",
          400: "rgb(var(--app-gray-400) / <alpha-value>)",
          500: "rgb(var(--app-gray-500) / <alpha-value>)",
          600: "rgb(var(--app-gray-600) / <alpha-value>)",
          700: "rgb(var(--app-gray-700) / <alpha-value>)",
          800: "rgb(var(--app-gray-800) / <alpha-value>)",
          900: "rgb(var(--app-gray-900) / <alpha-value>)",
          950: "rgb(var(--app-gray-950) / <alpha-value>)",
        },
        highlight: {
          DEFAULT: "var(--text-highlight)",
        },
      },
    },
  },
  variants: {
    aspectRatio: ["responsive", "hover"],
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
export default config;
