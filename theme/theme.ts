// theme/theme.ts
import { createSystem, defaultConfig } from "@chakra-ui/react";

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: `'Raleway', sans-serif` },
        // body: { value: `'Merriweather', serif` },
        body: { value: `'Roboto', ans-serif` },

        suse: { value: `'SUSE', 'Inter', sans-serif` }, // Additional custom font if needed
      },
      colors: {
        primary: { value: "rgb(5, 45, 82)" }, // Custom color for primary
        secondary: { value: "rgb(230, 41, 35)" }, // Custom color for secondary
        brand: {
          50: { value: "#f5e5e5" },
          100: { value: "#f1bfbf" },
          200: { value: "#ec9b9b" },
          300: { value: "#e67676" },
          400: { value: "#e05151" },
          500: { value: "#d92c2c" }, // Main brand color, e.g., "tomato"
          600: { value: "#b72323" },
          700: { value: "#8a1b1b" },
          800: { value: "#5c1212" },
          900: { value: "#2e0909" },
        },
      },
    },

    breakpoints: {
      sm: "640px",
      md: "767px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },

  globalCss: {
    body: {
      background: "rgb(248, 249, 250)",
    },

    // container: {
    //   mx: "auto",
    //   padding: {
    //     base: { value: "1rem" },
    //     sm: { value: "2rem" },
    //     lg: { value: "4rem" },
    //     xl: { value: "5rem" },
    //     "2xl": { value: "6rem" },
    //   },
    // },
  },
});
