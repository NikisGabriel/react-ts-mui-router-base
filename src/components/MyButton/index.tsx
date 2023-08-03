import { forwardRef } from "react";

import Button, { ButtonProps } from "@mui/material/Button";

import { LinkBehavior } from "../LinkBehavior";

import {
  withCustomTypographyProps,
  ICustomTypographyProps,
} from "../../hocs/withCustomTypographyProps";

type IButtonCustomTypographyProps = ICustomTypographyProps<ButtonProps>;

export type IMyButtonProps = Omit<
  IButtonCustomTypographyProps,
  "component" | "LinkComponent"
> &
  Required<Pick<IButtonCustomTypographyProps, "children" | "aria-label">>;

const MyButton = forwardRef<HTMLButtonElement, IMyButtonProps>(
  ({ disabled, ...rest }, ref) => {
    const ButtonWithCustomTypographyProps =
      withCustomTypographyProps<ButtonProps>(Button);
    return (
      <ButtonWithCustomTypographyProps
        LinkComponent={LinkBehavior}
        ref={ref}
        aria-disabled={disabled}
        disabled={disabled}
        {...rest}
      />
    );
  }
);

export { MyButton };
