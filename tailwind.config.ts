import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Oracle Aesthetic Palette
        void: "#000000",
        paper: "#F5F5F5",
        slate: "#707070",
        teal: {
          DEFAULT: "#0D7377",
          dark: "#0A5C5F",
          light: "#14919B",
        },
      },
      fontFamily: {
        display: ["var(--font-monument)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      letterSpacing: {
        oracle: "0.2em",
        wide: "0.1em",
      },
      animation: {
        "scan-line": "scanLine 3s ease-in-out infinite",
        "decode": "decode 0.5s ease-out forwards",
        "terminal-blink": "terminalBlink 1s step-end infinite",
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "reveal": "reveal 1s ease-out forwards",
      },
      keyframes: {
        scanLine: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { transform: "translateY(100%)", opacity: "0" },
        },
        decode: {
          "0%": { opacity: "0", filter: "blur(10px)" },
          "100%": { opacity: "1", filter: "blur(0)" },
        },
        terminalBlink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        reveal: {
          "0%": { clipPath: "inset(0 100% 0 0)" },
          "100%": { clipPath: "inset(0 0 0 0)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "scan-gradient": "linear-gradient(180deg, transparent, rgba(13, 115, 119, 0.3), transparent)",
      },
    },
  },
  plugins: [],
};

export default config;
