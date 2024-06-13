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
        "dark-purple": "#36B",
        "light-white": "rgba(255,255,255,0.48)",
        "bgColor": "#fbfbfb",
        "primary": 'var(--primary-color)'
      },
      fontFamily: {
        poppins: ['var(--font-poppins)']
      }
    },
  },
  plugins: [],
};
export default config;
