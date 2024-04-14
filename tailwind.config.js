const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        appBackground: "#fafafa",
        primary: {
          main: "var(--primary-main)",
          100: "var(--primary-100)",
          200: "var(--primary-200)",
          300: "var(--primary-300)",
          400: "var(--primary-400)",
        },
        success: {
          50: "#DAF7F0",
          100: "#A3EED6",
          200: "#75E6C1",
          300: "#47DDAC",
          400: "#48CBB6",
        },
        warning: {
          100: "#FDE3BC",
          200: "#FBD59B",
          300: "#FAC77A",
          400: "#F9CB4B",
        },
        orange: {
          50: "#FEE8E2",
          100: "#FEE8E2",
          200: "#FEE8E2",
          300: "#F78C67",
          400: "#FF8F41",
        },
        error: {
          100: "#FFF5F4",
          200: "#FFA19B",
          300: "#EE6163",
          400: "#EA3A3D",
        },
        gray: {
          100: "#F2F3F6",
          400: "#CDD5E4",
        },
        pink: {
          300: "#F5CEDF",
          600: "#DF5B93"
        },
        black: {
          400: "#000000",
          600: "#8C94A0",
          800: "#242424",
        },
        purple: {
          400: "#9257D5",
        },
        blue: {
          400: "#14ABF0",
        },
        red: {
          450: "#fa545f"
        },
        text: {
          primary: "#11142D",
          formLabel: "#B2B3BD",
          caption: "#808191",
          title: "#2C2F55",
        },
        subTitle: "#687588",
        badgeBg: "#E7F7EF",
        badgeText: "#0CAF60",
        activeButton: "#111827",
        borderGray: "#E9EAEC",
        navActive: "#27A376",
        inputBg: "#F8F8F8",
        placeholderText: "#A0AEC0",
        loginSubtitle: "#475467",
        signInButtonBg: "#0E1111",
        signInLabelText: "#344054",
        signInInputBorder: "#D0D5DD",
        signInInputText: "#101828"
      },
      width: {
        "test-side-bar": "var(--test-side-bar-w)", // acikkenki uzunluk
        "test-side-bar-mini": "var(--test-side-bar-w-mini)", // kapaliykenki uzunluk
        "test-body": "calc(100% - (var(--test-side-bar-w)))",
        "test-body-mini": "calc(100% - (var(--test-side-bar-w-mini)))",
        "test-side-bar-cont": "var(--test-side-bar-w-cont)",
        "admin-side-bar": "var(--admin-side-bar-w)", // admin bar acikkenki uzunluk
        "admin-body": "calc(100% - (var(--admin-side-bar-w)))", // admin ekrani body genisligi
        "subtopic-side-bar": "var(--subtopic-side-bar-w)", // admin bar acikkenki uzunluk
        "subtopic-body": "calc(100% - (var(--subtopic-side-bar-w)))", // admin ekrani body genisligi
        "1/20": "5%",
        "1/10": "10%",
        "3/20": "15%",
        "6/20": "30%",
        13: "52px",
        18: "4.5rem",
      },
      maxWidth: {
        "container-lg": "1500px",
        "container-md": "1220px",
        "container-sm": "800px",
        "container-test-body": "calc(1500px - (var(--test-side-bar-w-mini)))",
        "container-subtopic-body":
          "calc(1500px - (var(--subtopic-side-bar-w)))",
        "2xs": "256px",
        "2.5xs": "222px"
      },
      height: {
        12.5: "50px",
        13: "52px",
        15: "60px",
        17.5: "4.375rem", // 70px
      },
      rotate: {
        7: "7deg",
      },
      fontSize: {
        "2xs": "10px",
        "2.5xl": "28px",
        "4.5xl": "40px"
      },
      margin: {
        13: "52px"
      },
      zIndex: {
        negative: -1,
      },
      spacing: { // for top,bottom,left,right values
        13: "52px"
      },
      padding: {
        1.25: "5px"
      },
    },
    screens: {
      "310": "310px",
      "350": "350px",
      "410": "410px",
      xs: "500px",
      "560": "560px",
      "850": "850px",
      "1100": "1100px",
      ...defaultTheme.screens,
    },
    variants: {
      extend: {
        cursor: ["disabled"],
        padding: ["hover"],
        backgroundColor: ["hover"],
        borderColor: ["focus"],
        maxHeight: ["group-hover"],
        borderRadius: ["hover"],
        zIndex: ["group-hover", "hover"],
        transitionProperty: {
          'height': 'height'
        }
      },
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    }
  },
  plugins: [],
};
