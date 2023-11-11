/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkorange: "#ff7400",
        gray: {
          "100": "#888",
          "200": "#858585",
          "300": "rgba(0, 0, 0, 0.11)",
          "400": "rgba(0, 0, 0, 0)",
          "500": "rgba(255, 255, 255, 0.05)",
          "600": "rgba(255, 255, 255, 0)",
          "700": "rgba(0, 0, 0, 0.6)",
        },
        black1: "#000",
        black: "#030102",
        lightsteelblue: "#bcc3d1",
        grey: "#9ea8bd",
        gainsboro: {
          "100": "#d9d9d9",
          "200": "rgba(217, 217, 217, 0.16)",
        },
        dimgray: "#5b5b5b",
        darkslategray: "rgba(66, 80, 102, 0.4)",
        firebrick: "#c1272d",
        "mini-title": "#121826",
        red: "#ff0000",
        gold: "#ffc001",
        limegreen: "#40ac0e",
      },
      spacing: {},
      fontFamily: {
        "poppins-14-medium": "Poppins",
        roboto: "Roboto",
        inter: "Inter",
      },
      borderRadius: {
        xl: "20px",
        "3xs": "10px",
        "8xs": "5px",
      },
    },
    fontSize: {
      xl: "20px",
      "3xs": "10px",
      base: "16px",
      xs: "12px",
      sm: "14px",
      "4xs": "9px",
      lg: "18px",
      "2xs": "11px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: true,
  },
};
