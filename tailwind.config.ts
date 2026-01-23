import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          950: "#06070A",
          900: "#0A0C12",
          850: "#0D1020"
        }
      },
      boxShadow: {
        soft: "0 12px 40px rgba(0,0,0,.45)",
        glow:
          "0 0 0 1px rgba(255,255,255,.06), 0 10px 30px rgba(0,0,0,.45), 0 0 60px rgba(59,130,246,.12)"
      }
    }
  },
  plugins: []
} satisfies Config;
