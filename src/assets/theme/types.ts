import { Palette, PaletteOptions } from "@mui/material/styles";

// Criando objetos da paleta
type IBackground = {
  primary: string;
  secondary: string;
  tertiary: string;
};

type IText = {
  primary: string;
  secondary: string;
  highlighted: string;
  inverted: string;
};

// Criando objetos de tipografia
type IFontFamily = {
  base: string;
  stylized: string;
};

type IFontWeight = {
  regular: number;
  bold: number;
};

// Tipagem de estilos
declare module "@mui/material/styles" {
  // Omitindo secondary do tema
  interface Theme {
    palette: Omit<Palette, "secondary">;
  }

  interface ThemeOptions {
    paletteOptions?: Omit<PaletteOptions, "secondary">;
  }

  // Alterando tipagem de tipografia
  interface TypographyVariants {
    fontFamily: IFontFamily;
    fontWeight: IFontWeight;
  }

  interface TypographyVariantsOptions {
    fontFamily: IFontFamily;
    fontWeight: IFontWeight;
  }

  // Alterando a tipagem de Background
  interface TypeBackground extends IBackground {}

  // Alterando a tipagem de text
  interface TypeText extends IText {}
}

// Tipagem de estilos
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    fontFamily: true;
    fontWeight: true;
    h3: false;
    h4: false;
    h5: false;
    h6: false;
    fontWeightLight: false;
    fontWeightMedium: false;
    fontSize: false;
    htmlFontSize: false;
    button: false;
    overline: false;
    caption: false;
  }
}
