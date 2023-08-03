import Link, { LinkProps } from "@mui/material/Link";

import { LinkBehavior } from "../LinkBehavior";

import {
  withCustomTypographyProps,
  ICustomTypographyProps,
} from "../../hocs/withCustomTypographyProps";

type ILinkCustomTypographyProps = ICustomTypographyProps<LinkProps>;

type IMyLinkProps = Omit<
  ILinkCustomTypographyProps,
  "aria-label" | "component"
> &
  Required<Pick<ILinkCustomTypographyProps, "title" | "href" | "children">>;

const MyLink = ({ title, underline = "none", ...rest }: IMyLinkProps) => {
  const LinkWithCustomTypographyProps =
    withCustomTypographyProps<LinkProps>(Link);
  return (
    <LinkWithCustomTypographyProps
      component={LinkBehavior}
      title={title}
      aria-label={title}
      underline={underline}
      {...rest}
    />
  );
};

export { MyLink };
