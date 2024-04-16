module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this line to include any file types that might contain Tailwind classes
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "brand-blue": "#007ace",
        "brand-red": "#ff4136",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
