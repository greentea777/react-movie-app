/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "ping-once": {
          "0%, 100%": { opacity: "1" },

          "50% ": {
            transform: "scale(1.5)",
            opacity: ".4",
          },
        },
      },

      animation: {
        "ping-once": "ping-once .7s cubic-bezier(0, 0, 0.2, 1) 1",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
