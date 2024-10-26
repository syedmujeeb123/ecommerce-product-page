module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          orange: "hsl(26, 100%, 55%)",
          paleOrange: "hsl(25, 100%, 94%)",
        },
        neutral: {
          veryDarkBlue: "hsl(220, 13%, 13%)",
          darkGrayishBlue: "hsl(219, 9%, 45%)",
          grayishBlue: "hsl(220, 14%, 75%)",
          lightGrayishBlue: "hsl(223, 64%, 98%)",
          white: "hsl(0, 0%, 100%)",
          black75: "rgba(0, 0, 0, 0.75)", // Using rgba for opacity
        },
      },
      fontFamily: {
        kumbh: ["Kumbh Sans", "sans-serif"],
      },
      fontSize: {
        base: "16px", // Body copy font size
      },
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
    },
  },
  plugins: [],
};
