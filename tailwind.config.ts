module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}", // Include all files in app folder
    "./src/components/**/*.{js,ts,jsx,tsx}", // Include all components
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
        blue: {
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
