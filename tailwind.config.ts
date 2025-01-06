import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280",
        "2xl": "1440px",
      },
      maxWidth: {
        base: "1460px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },
      fontSize: {
        8: "8px",
        10: "10px",
        11: "11px",
      },
      colors: {
        brand: {
          dark: "#222222",
          yellow: "#FEE000",
          blue: "#00A3FF",
          red: "#FE4928",
          green: "#2DBE64",
          peach: "#FFC4D0",
          "light-green": "#9ED6A1",
          "dark-red": "#760000",
          "dark-green": "#204F3D",
          "light-red": "#F22A52",
          "light-blue": "#C8DDF2",
          purple: {
            DEFAULT: "#7B61FF",
            10: "#7573F6",
          },
          gray: {
            10: "#FAFAFF",
            20: "#F5F5FF",
            30: "#E6E6F0",
            40: "#BCBCCC",
            50: "#9393A3",
            60: "#67677A",
            70: "#3E3E52",
            80: "#343A40",
          },
        },
      },
      borderRadius: {
        10: "10px",
        20: "20px",
      },
      boxShadow: {
        "contact-dropdown": "0px 64px 134px 0px #0000001A;",
      },
    },
  },
  plugins: [],
} satisfies Config;
