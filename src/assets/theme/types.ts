import { Palette, PaletteOptions } from "@mui/material/styles";

// Tipagem de estilos
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
