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
        // Understated luxury-retreat palette: warm bone, muted olive, deep green
        cream: "#F3EEE4",
        sand: "#E9E2D2",
        clay: "#DED6C4",
        // Deep, muted greens for imagery overlays, footer and dark accents
        forest: {
          50: "#EEEFE7",
          100: "#DBDDCC",
          200: "#BDC0A6",
          300: "#9AA083",
          400: "#787E60",
          500: "#5C6146",
          600: "#474B36",
          700: "#383B2B",
          800: "#2C2F22",
          900: "#22251A",
        },
        // legacy alias -> same muted green scale
        sage: {
          50: "#EEEFE7",
          100: "#DBDDCC",
          200: "#BDC0A6",
          300: "#9AA083",
          400: "#787E60",
          500: "#5C6146",
          600: "#474B36",
          700: "#383B2B",
          800: "#2C2F22",
          900: "#22251A",
        },
        // Signature muted olive / khaki accent (buttons, eyebrows, highlights)
        olive: {
          300: "#B7B287",
          400: "#9E9868",
          500: "#847F4F",
          600: "#6C673E",
        },
        // Accent aliases remapped to olive so existing classes recolor cleanly
        terracotta: {
          300: "#B7B287",
          400: "#9E9868",
          500: "#847F4F",
          600: "#6C673E",
        },
        gold: {
          300: "#C0B98F",
          400: "#A9A277",
          500: "#8F894F",
          600: "#726C3B",
        },
        ink: "#2A2A21",
        muted: "#6F6A5A",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "Georgia", "serif"],
      },
      letterSpacing: {
        luxe: "0.25em",
      },
      boxShadow: {
        soft: "0 30px 70px -35px rgba(34, 37, 26, 0.4)",
        card: "0 20px 50px -30px rgba(34, 37, 26, 0.28)",
      },
      borderRadius: {
        xl2: "0.75rem",
        xl3: "1rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slow-float": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(4deg)" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.9s ease-out both",
        "slow-float": "slow-float 9s ease-in-out infinite",
        "spin-slow": "spin-slow 26s linear infinite",
        marquee: "marquee 34s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
