import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      scrollbar: {
        hide: {
          "scrollbar-width": "none",
          /* Internet Explorer 10+ */
          "-ms-overflow-style": "none",
          /* WebKit 기반 브라우저들 (Chrome, Safari, Edge) */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      },
      animation: {
        "loop-scroll": "loop-scroll 35s linear infinite",
        positionUp: "positionUp 2s ease-in-out infinite",
        "dropdown-grow": "dropdown-grow 0.2s ease-in-out forwards",
      },
      keyframes: {
        "loop-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        positionUp: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-30%)" },
        },
        "dropdown-grow": {
          "0%": {
            transform: "scale(0)",
            transformOrigin: "top right",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1)",
            transformOrigin: "top right",
            opacity: "1",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-gradient": "linear-gradient(270deg, rgba(248, 250, 251, 0.00) 0%, #F8FAFB 71.25%)",
      },
      boxShadow: {
        "check-radio-border": "0 0 0 1px #3F3F3F",
        "default-radio-border": "0 0 0 1px #D1D1D1",
        "custom-shadow": "4px 4px 24px 0px rgba(0, 0, 0, 0.04)",
      },
    },
    screens: {
      mb: { max: "767px" },
      tb: { min: "768px", max: "1199px" },
      pc: { min: "1200px" },
    },
    colors: {
      inherit: "inherit",
      current: "currentColor",
      transparent: "transparent",
      white: "#FFFFFF",
      black: {
        DEFAULT: "#000000",
        overlay: "rgba(0, 0, 0, 0.70)",
      },
      gray: {
        100: "#F8FAFB",
        200: "#EBEBEB",
        300: "#D1D1D1",
        400: "#C4C4C4",
        500: "#848A8A",
        600: "#656C6C",
        700: "#494E4E",
        800: "#333333",
        900: "#1C1C1C",
      },
      yellow: {
        100: "#FEFCE8",
        200: "#FFFAC2",
        300: "#FFF188",
        400: "#FFE245",
        500: "#FDCB07",
        600: "#EDB405",
      },
      red: {
        100: "#FCD3D3",
        200: "#FAA7A7",
        300: "#F77B7B",
        400: "#F54E4E",
        500: "#F22222",
        600: "#C21B1B",
        700: "#911515",
        800: "#610E0E",
        900: "#300707",
      },
      green: {
        100: "#DAFEEC",
        200: "#B8FAD9",
        300: "#81F4BC",
        400: "#43E596",
        500: "#1ACD77",
        600: "#0E9F59",
        700: "#10854D",
        800: "#126940",
        900: "#115636",
        950: "#03301D",
      },
      blue: {
        50: "#EFF4FF",
        100: "#D5DCFB",
        200: "#ABB8F7",
        300: "#8295F3",
        400: "#5871EF",
        500: "#2E4EEB",
        600: "#253EBC",
        700: "#1C2F8D",
        800: "#121F5E",
        900: "#09102F",
      },
    },
  },
  plugins: [],
};
export default config;
