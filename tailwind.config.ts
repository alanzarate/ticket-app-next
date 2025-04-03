import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        nav: "#18222f",
        card: "#47566a",
        page: "#2b3441",
        "card-hover": "#4f5e7a",
        "blue-accent": "#0084d4",
        "blue-accent-hover": "#009fff",
        "default-text": "#f1f4f5"
      },
    },
  },
  plugins: [],
};
export default config;
