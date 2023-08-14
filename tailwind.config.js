/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderColor: {
        "white-opacity-02": "rgba(255, 255, 255, 0.02)",
      },
    },
  },
  plugins: [],
};
