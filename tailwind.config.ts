import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_brand: "#08CEFF",
        secondary_brand: "#22A2FF",
        tertiary_brand: "#3484FF",
        quaternary_brand: "#4C4488",
        quinary_brand: "#232152",
        custom_gray: "#f5f6fa",
        custom_purple: "#321649",
      },
    },
  },
  plugins: [],
};
export default config;
