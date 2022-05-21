module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#a991f7",
          // secondary: "#f6d860",
          // secondary: "#F28C18",
          secondary: "#DB7706",
          accent: "#00E77F",
          neutral: "#3d4451",
          "base-100": "#212121",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
