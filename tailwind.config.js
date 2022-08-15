/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#a21caf",

          "secondary": "#9333ea",

          "accent": "#2563eb",

          "neutral": "#111827",

          "base-100": "#1f2937",

          "info": "#3ABFF8",

          "success": "#065f46",

          "warning": "#FBBD23",

          "error": "#dc2626",
        },
      },
    ],
  },
}
