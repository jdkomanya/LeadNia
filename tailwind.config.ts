import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#0F3D2E",
          leaf: "#1F6F4A",
          gold: "#C9A227",
          bg: "#F8FAF8",
          text: "#1F2933",
          muted: "#6B7280"
        }
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15, 61, 46, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
