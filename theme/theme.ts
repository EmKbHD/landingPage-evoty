// theme/theme.ts
import { createSystem, defaultConfig } from "@chakra-ui/react";
// import { ButtonStyles as Button } from "./components/ButtonStyles";

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: `'Raleway', sans-serif` },
        body: { value: `'Roboto', sans-serif` },
        suse: { value: `'SUSE', sans-serif` }, // Additional custom font if needed
      },
      colors: {
        primary: { value: "rgb(5, 45, 82)" }, // Custom color for primary
        secondary: { value: "rgb(230, 41, 35)" }, // Custom color for secondary
        brandSecondary: {
          50: { value: "#f5e5e5" }, // Lightest shade for brand (almost off-white)
          100: { value: "#f1bfbf" }, // Very light pinkish shade
          200: { value: "#ec9b9b" }, // Light muted red
          300: { value: "#e67676" }, // A soft coral red
          400: { value: "#e05151" }, // Medium vibrant red
          500: { value: "#d92c2c" }, // Main brand color (bright red, e.g., "tomato")
          600: { value: "#b72323" }, // Darker shade for emphasis
          700: { value: "#8a1b1b" }, // Dark red, close to burgundy
          800: { value: "#5c1212" }, // Deep, dark red
          900: { value: "#2e0909" }, // Almost black, very dark red
        },
        brandPrimary: {
          50: { value: "#f5f9ff" }, // Very light blue (almost pastel)
          100: { value: "#e1f0ff" }, // Light blue (soft pastel)
          200: { value: "#c4e0ff" }, // Light-medium blue
          300: { value: "#a8d0ff" }, // Medium blue
          400: { value: "#8bc0ff" }, // Slightly darker blue
          500: { value: "#b9d1ff" }, // should be brand color
          600: { value: "#8ca4d3" }, // Darker blue
          700: { value: "#617aa5" }, // Dark navy blue
          800: { value: "#36527b" }, // Very dark blue
          900: { value: "#052D52" }, // Darkest shade
        },
      },
    },

    // components: {
    //   Button,
    // },

    breakpoints: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },

  globalCss: {
    body: {
      background: "rgb(248, 249, 250)",
    },
  },
});
