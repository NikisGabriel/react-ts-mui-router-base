import { Theme, SxProps } from "@mui/material/styles";
import {
  OverridableComponent,
  OverridableTypeMap,
} from "@mui/material/OverridableComponent";

import { TypographyProps } from "@mui/material/Typography";
import { LinkProps } from "@mui/material/Link";
import { ButtonProps } from "@mui/material/Button";
import { ElementType } from "react";

type ICustomProps = {
  fontWeight?: keyof Theme["typography"]["fontWeight"];
  fontFamily?: keyof Theme["typography"]["fontFamily"];
  textColor?: keyof Theme["palette"]["text"];
};

type IBaseComponentProps = TypographyProps | LinkProps | ButtonProps;
type IBaseComponent = OverridableComponent<OverridableTypeMap>;
export type ICustomTypographyProps<T> = ICustomProps &
  Omit<T, "color" | "fontWeight" | "fontFamily" | "component"> & {
    // O MUI enfrenta problemas para inferir sobrescrita para components
    // Solucionando usando a tipagem oferecida pelo React
    component?: ElementType;
  };

const withCustomTypographyProps = <T extends IBaseComponentProps>(
  Component: IBaseComponent
) => {
  const CustomizedTypography = (props: ICustomTypographyProps<T>) => {
    const { fontWeight, fontFamily, textColor, sx, ...rest } = props;

    const styles: SxProps<Theme> = (theme) => ({
      fontWeight: fontWeight && theme.typography.fontWeight[fontWeight],
      fontFamily: fontFamily && theme.typography.fontFamily[fontFamily],
      color: textColor && theme.palette.text[textColor],
    });

    return (
      // Inferindo que o tipo de props é o mesmo do tipo genérico passado
      <Component sx={[styles, sx]} {...(rest as unknown as T)}>
        {props.children}
      </Component>
    );
  };

  return CustomizedTypography;
};

export { withCustomTypographyProps };
