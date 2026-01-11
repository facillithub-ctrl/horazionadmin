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
        horazion: {
          red: "#B6192E",      // Cor principal da marca
          black: "#000000",
          grey: "#545454",
          white: "#FFFFFF",
          bg: "#E6E6E6",       // Fundo padrão
          adminBg: "#F4F7FE",  // Fundo específico para o Dashboard (mais leve)
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
      },
      borderRadius: {
        'pill': '40px',
        'mega': '30px',
        'inner-card': '22px',
      },
    },
  },
  plugins: [],
};
export default config;