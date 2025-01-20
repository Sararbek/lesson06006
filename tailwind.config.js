/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '100%',
          xl: '1240px'
        }
      },
      fontFamily: {
        "Inter": ["Inter", "serif-serif"],
        "Roboto": ["Roboto", "sans-serif"]
      },
      colors: {
        bgTopBarColor: "#f0f2f5",
        textLogoColor: "#7000ff",
        textFirstFontColor: "#1f2026",
        textSecondFontColor: "#7e818c",
        bgProductColor: "#efefef",
        textStarColor: "#ffb54c",
        bgPriceTextColor: "#ffff00",
        textPriceTextColor: "#151f26",
        bgHoverCartIconColor: "#dee0e5",
        bgSearchIconColor: "#edefe2",
      },
      boxShadow: {
        'normal': '0px 1px 6px rgba(0,0,0,0.2);'
      }
    },
  },
  plugins: [],
}