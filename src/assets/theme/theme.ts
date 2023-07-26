import { createTheme, Palette, PaletteOptions } from "@mui/material";

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
  spacing: (factor: number) => `${(factor / 10 / 100) * 62.5}rem`,
});

export default theme;

// Tipagem
declare module "@mui/material/styles" {
  // Omitindo secondary do tema
  interface Theme {
    palette: Omit<Palette, "secondary">;
  }

  interface ThemeOptions {
    paletteOptions?: Omit<PaletteOptions, "secondary">;
  }

  // Alterando a tipagem de bg
  interface TypeBackground {
    primary: string;
    secondary: string;
    tertiary: string;
  }
}
