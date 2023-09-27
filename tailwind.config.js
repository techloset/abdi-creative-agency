/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-red": "#FF2D59",
        "main-yellow": "#FFCC00",
        "main-purple": "#4C40F7",
        "main-bg": "#00113B",
        "main-green": "#4ADB61",
        "main-gray": "#6B6B6B",
        "main-blue": "#007BFF",
        "main-orange": "#FF6800",
      },
      boxShadow: {
        "btn-shadow": "-15px 10px 30px 0px rgba(76, 64, 247, 0.25)",
        "service-shadow": "-10px 30px 70px 0px rgba(76, 64, 247, 0.20)",
        "testimonial-shadow": "-15px 20px 70px 0px rgba(76, 64, 247, 0.20)",
      },
      backgroundImage: {
        "hero-img": "url(/assets/images/bg-hero.png)",
        "faq-bg": "url(/assets/images/bg-FAQ-section.png)",
        "sm-faq-bg": "url(/assets/images/sm-bg-FAQ-section.png)",
      },
      backgroundSize: {
        full: "100%",
      },
    },
  },
  plugins: [],
};
