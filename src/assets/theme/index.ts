import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      dark: "#03045E",
      main: "#1f227e",
      light: "#2c3292",
      contrastText: "#ffffff",
    },
    background: {
      primary: "#ffffff",
      secondary: "#EBEFF2",
      tertiary: "#F4F8FB",
    },
    divider: "#EBEFF2",
  },
  spacing: (factor: number) => `${(factor / 10 / 100) * 62.5}rem`, // 10 Px => 1 Rem, FontSize 10px
});

export default theme;
