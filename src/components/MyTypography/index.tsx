import { forwardRef } from "react";

import Typography, { TypographyProps } from "@mui/material/Typography";

import {
  withCustomTypographyProps,
  ICustomTypographyProps,
} from "../../hocs/withCustomTypographyProps";

type ITypographyCustomTypographyProps = ICustomTypographyProps<TypographyProps>;

export type IMyTypographyProps = ITypographyCustomTypographyProps;

const MyTypography = forwardRef<HTMLParagraphElement, IMyTypographyProps>(
  ({ ...rest }, ref) => {
    const TypographyWithCustomTypographyProps =
      withCustomTypographyProps<TypographyProps>(Typography);
    return <TypographyWithCustomTypographyProps ref={ref} {...rest} />;
  }
);

export { MyTypography };
