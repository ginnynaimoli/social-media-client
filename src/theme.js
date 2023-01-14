export const colorTokens = {
  grey: {
    0: "#FFFFFF",
    10: "#F6F6F6",
    50: "#F0F0F0",
    100: "#E0E0E0",
    200: "#C2C2C2",
    300: "#A3A3A3",
    400: "#858585",
    500: "#666666",
    600: "#4D4D4D",
    700: "#333333",
    800: "#1A1A1A",
    900: "#0A0A0A",
    1000: "#000000",
  },
  primary: {
    50: "#f4b7c5",
    100: "#f1a5b7",
    200: "#ee92a9",
    300: "#eb809a",
    400: "#e65c7d",
    500: "#e34a6f",
    600: "#cc4364",
    700: "#9f344e",
    800: "#5b1e2c",
    900: "#17070b",
  }
}

export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === 'dark'
        ? {
          primary: {
            dark: colorTokens.primary[700],
            main: colorTokens.primary[500],
            light: colorTokens.primary[300]
          },
          neutral: {
            dark: colorTokens.grey[100],
            main: colorTokens.grey[200],
            mediumMain: colorTokens.grey[300],
            medium: colorTokens.grey[400],
            light: colorTokens.grey[700]
          },
          background: {
            default: colorTokens.grey[900],
            alt: colorTokens.grey[800]
          }
        } 
        : {
          primary: {
            dark: colorTokens.primary[700],
            main: colorTokens.primary[500],
            light: colorTokens.primary[100]
          },
          neutral: {
            dark: colorTokens.grey[700],
            main: colorTokens.grey[500],
            mediumMain: colorTokens.grey[400],
            medium: colorTokens.grey[300],
            light: colorTokens.grey[50]
          },
          background: {
            default: colorTokens.grey[10],
            alt: colorTokens.grey[0]
          }
        }
      ),

      typography: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 12,
        h1: {
          fontFamily: ["Rubik", "sans-serif"].join(","),
          fontSize: 40,
        },
        h2: {
          fontFamily: ["Rubik", "sans-serif"].join(","),
          fontSize: 32,
        },
        h3: {
          fontFamily: ["Rubik", "sans-serif"].join(","),
          fontSize: 24,
        },
        h4: {
          fontFamily: ["Rubik", "sans-serif"].join(","),
          fontSize: 20,
        },
        h5: {
          fontFamily: ["Rubik", "sans-serif"].join(","),
          fontSize: 16,
        },
        h6: {
          fontFamily: ["Rubik", "sans-serif"].join(","),
          fontSize: 14,
        }
      }
    }
  }
}