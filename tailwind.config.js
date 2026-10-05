/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#D8DCD9",
          deep: "#C3C8C5",
        },
        ink: {
          DEFAULT: "#121820",
          soft: "#3E474E",
          mute: "#565F65",
        },
        accent: {
          DEFAULT: "#B01D26",
          dark: "#8A151C",
          bright: "#F58A7A",
        },
        prime: {
          DEFAULT: "#1D4E89",
          dark: "#14395F",
        },
      },
      fontFamily: {
        display: ['"Chakra Petch"', "system-ui", "sans-serif"],
        body: ['"IBM Plex Sans"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
      maxWidth: {
        shell: "78rem",
      },
    },
  },
  plugins: [],
};
