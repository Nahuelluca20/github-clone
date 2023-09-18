import type {Config} from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        githubDark: {
          100: "#22272E",
          200: "#1C2128",
        },
        githubGray: {
          50: "#adbac7",
          100: "#636e7b",
          150: " #444c56",
          200: "#768390",
        },
        githubGreen: {
          100: "#347d39",
          200: "#46954a",
        },
        githubBlue: {
          50: "#539bf5",
        },
      },
    },
  },
  plugins: [],
};

export default config;
