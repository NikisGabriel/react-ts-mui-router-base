import { TypographyVariantsOptions } from "@mui/material/styles";

import spacing from "./spacing";
import palette from "./palette";

const typography: TypographyVariantsOptions = {
  // Constantes
  fontWeight: { regular: 400, bold: 700 },
  fontFamily: {
    base: "'Roboto', 'Helvetica', sans-serif",
    stylized: "'League Spartan', 'Helvetica', sans-serif",
  },

  // Variantes
  allVariants: {
    fontFamily: "'Roboto', 'Helvetica', sans-serif",
    fontWeight: 400,
    textTransform: undefined,
    color: palette.text?.primary,
  },
  h1: {
    fontSize: spacing(35),
    lineHeight: spacing(35),
  },
  h2: {
    fontSize: spacing(20),
    lineHeight: spacing(20),
  },
  subtitle1: {
    fontSize: spacing(20),
    lineHeight: spacing(20),
  },
  subtitle2: {
    fontSize: spacing(16),
    lineHeight: spacing(16),
  },
  body1: { fontSize: spacing(16), lineHeight: spacing(16) },
  button: { fontSize: spacing(16), lineHeight: spacing(16) },
};

export default typography;
